import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  getDaysInMonth,
  getDate,
  getMonth,
  parseISO,
} from 'date-fns';
import type { CalculationInput, CalculationOutput } from './types';

/**
 * Calculate exact seniority with Argentina labor law rounding rules
 * Rule: If fraction > 3 months → round up 1 year, else round down
 */
function calculateSeniority(startDate: Date, endDate: Date): {
  years: number;
  months: number;
  days: number;
} {
  const totalMonths = differenceInMonths(endDate, startDate);
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  const days = differenceInDays(endDate, startDate) - (totalMonths * 30);

  return {
    years,
    months: remainingMonths,
    days: Math.max(0, days),
  };
}

/**
 * Compute seniority years for compensation (Art. 245)
 * If fraction > 3 months → round up, else round down
 */
function computeSeniorityYears(seniority: { years: number; months: number }): number {
  if (seniority.months > 3) {
    return seniority.years + 1;
  }
  return seniority.years;
}

/**
 * Calculate "Antigüedad" compensation (Art. 245 LCT)
 * Formula: 1 monthly salary per year of service
 */
function calculateAntiguedad(
  baseSalary: number,
  seniorityYears: number,
  applyReform: boolean
): { amount: number; notes: string[] } {
  const notes: string[] = [];
  let adjustedSalary = baseSalary;

  if (applyReform) {
    // Reform 2026: Exclude variable concepts (approx 15% reduction)
    adjustedSalary = baseSalary * 0.85;
    notes.push(
      'Reforma 2026 aplicada: Se excluyeron conceptos variables del cálculo (reducción ~15%)'
    );
  }

  const amount = adjustedSalary * seniorityYears;
  return { amount, notes };
}

/**
 * Calculate Preaviso (Notice period) - Art. 231 LCT
 */
function calculatePreaviso(
  baseSalary: number,
  seniorityYears: number,
  dismissalType: string,
  preavisoGiven: boolean
): number {
  // Only applies to dismissal without cause and if no notice was given
  if (dismissalType !== 'without_cause' || preavisoGiven) {
    return 0;
  }

  // Less than 5 years: 1 month salary
  // 5 years or more: 2 months salary
  return seniorityYears < 5 ? baseSalary : baseSalary * 2;
}

/**
 * Calculate SAC sobre Preaviso (proportional bonus on notice period)
 */
function calculateSacSobrePreaviso(preaviso: number): number {
  return preaviso / 12;
}

/**
 * Calculate Integration Month (if dismissed mid-month)
 * Pays remaining days of the month
 */
function calculateIntegrationMonth(
  baseSalary: number,
  endDate: Date,
  dismissalType: string,
  preavisoGiven: boolean
): number {
  // Only applies if dismissed without cause and no preaviso given
  if (dismissalType !== 'without_cause' || preavisoGiven) {
    return 0;
  }

  const dayOfMonth = getDate(endDate);
  const daysInMonth = getDaysInMonth(endDate);

  // If dismissed before end of month
  if (dayOfMonth < daysInMonth) {
    const remainingDays = daysInMonth - dayOfMonth;
    const dailySalary = baseSalary / 30;
    return dailySalary * remainingDays;
  }

  return 0;
}

/**
 * Calculate proportional vacation days
 * Vacation days by seniority in Argentina:
 * - Up to 5 years: 14 days
 * - 5-10 years: 21 days
 * - 10-20 years: 28 days
 * - 20+ years: 35 days
 */
function calculateProportionalVacation(
  baseSalary: number,
  seniorityYears: number,
  monthsWorkedInYear: number
): number {
  let annualVacationDays = 14;
  
  if (seniorityYears >= 20) {
    annualVacationDays = 35;
  } else if (seniorityYears >= 10) {
    annualVacationDays = 28;
  } else if (seniorityYears >= 5) {
    annualVacationDays = 21;
  }

  // Proportional calculation
  const proportionalDays = (annualVacationDays * monthsWorkedInYear) / 12;
  
  // Convert days to salary (divided by 25 working days)
  return (baseSalary / 25) * proportionalDays;
}

/**
 * Calculate proportional SAC (Sueldo Anual Complementario)
 * 1/12 of best salary per month worked in the semester
 */
function calculateProportionalSAC(
  baseSalary: number,
  endDate: Date,
  startDate: Date
): number {
  const month = getMonth(endDate); // 0-11
  
  // Determine semester start
  const semesterStart = month < 6 ? 0 : 6;
  
  // Count months worked in current semester
  let monthsInSemester = (month - semesterStart) + 1;
  
  // If started this year, adjust
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  
  if (startYear === endYear) {
    const startMonth = getMonth(startDate);
    if (startMonth > semesterStart) {
      monthsInSemester = (month - startMonth) + 1;
    }
  }

  return (baseSalary * Math.max(0, monthsInSemester)) / 12;
}

/**
 * Main calculation function
 * Implements Argentina labor indemnization calculation
 */
export function calculateIndemnization(
  input: CalculationInput
): CalculationOutput {
  const startDate = parseISO(input.startDate);
  const endDate = parseISO(input.endDate);

  // Validate dates
  if (endDate <= startDate) {
    throw new Error('La fecha de fin debe ser posterior a la fecha de inicio');
  }

  // Calculate seniority
  const seniority = calculateSeniority(startDate, endDate);
  const seniorityYears = computeSeniorityYears(seniority);

  // Determine base salary
  let baseSalary = input.bestMonthlySalary;

  const notes: string[] = [];

  // 1. Antigüedad (Art. 245)
  const antiguedadResult = calculateAntiguedad(
    baseSalary,
    seniorityYears,
    input.applyReform2026
  );
  const antiguedadCompensation = antiguedadResult.amount;
  notes.push(...antiguedadResult.notes);

  // Adjust base salary if reform applied (for other calculations)
  if (input.applyReform2026) {
    baseSalary = baseSalary * 0.85;
  }

  // 2. Preaviso
  const preaviso = calculatePreaviso(
    baseSalary,
    seniorityYears,
    input.dismissalType,
    input.preavisoGiven
  );

  // 3. SAC sobre Preaviso
  const sacSobrePreaviso = calculateSacSobrePreaviso(preaviso);

  // 4. Integration Month
  const integrationMonth = calculateIntegrationMonth(
    baseSalary,
    endDate,
    input.dismissalType,
    input.preavisoGiven
  );

  // 5. Proportional Vacation
  const monthsWorkedInYear = (getMonth(endDate) + 1) % 12 || 12;
  const proportionalVacation = calculateProportionalVacation(
    baseSalary,
    seniorityYears,
    monthsWorkedInYear
  );

  // 6. Proportional SAC
  const proportionalSAC = calculateProportionalSAC(
    baseSalary,
    endDate,
    startDate
  );

  // Calculate total
  const total =
    antiguedadCompensation +
    preaviso +
    sacSobrePreaviso +
    integrationMonth +
    proportionalVacation +
    proportionalSAC;

  // Build breakdown
  const breakdown = [
    {
      concept: 'Indemnización por Antigüedad (Art. 245)',
      amount: antiguedadCompensation,
      description: `${seniorityYears} ${seniorityYears === 1 ? 'año' : 'años'} de antigüedad`,
    },
    {
      concept: 'Preaviso',
      amount: preaviso,
      description: preaviso > 0 
        ? `${seniorityYears < 5 ? '1 mes' : '2 meses'} de preaviso no otorgado` 
        : 'No corresponde',
    },
    {
      concept: 'SAC sobre Preaviso',
      amount: sacSobrePreaviso,
      description: sacSobrePreaviso > 0 ? 'Proporcional al preaviso' : 'No corresponde',
    },
    {
      concept: 'Integración del Mes',
      amount: integrationMonth,
      description: integrationMonth > 0 ? 'Días restantes del mes' : 'No corresponde',
    },
    {
      concept: 'Vacaciones Proporcionales',
      amount: proportionalVacation,
      description: 'Proporcional al tiempo trabajado en el año',
    },
    {
      concept: 'SAC Proporcional',
      amount: proportionalSAC,
      description: 'Proporcional al semestre',
    },
  ];

  return {
    seniorityYearsComputed: seniorityYears,
    seniorityMonths: seniority.months,
    seniorityDays: seniority.days,
    antiguedadCompensation,
    preaviso,
    sacSobrePreaviso,
    integrationMonth,
    proportionalVacation,
    proportionalSAC,
    total,
    breakdown,
    metadata: {
      appliedReform: input.applyReform2026,
      adjustedSalary: input.applyReform2026 ? baseSalary : undefined,
      notes,
    },
  };
}

/**
 * Format currency for Argentina (ARS)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format number for display
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('es-AR').format(value);
}
