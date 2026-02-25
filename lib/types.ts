import { z } from 'zod';

// Input validation schema
export const calculationInputSchema = z.object({
  startDate: z.string().min(1, 'Fecha de inicio requerida'),
  endDate: z.string().min(1, 'Fecha de finalización requerida'),
  bestMonthlySalary: z.number().positive('El salario debe ser mayor a 0'),
  dismissalType: z.enum(['without_cause', 'with_cause', 'resignation'], {
    errorMap: () => ({ message: 'Tipo de despido inválido' })
  }),
  preavisoGiven: z.boolean(),
  includeVariableConcepts: z.boolean(),
  applyReform2026: z.boolean(),
});

export type CalculationInput = z.infer<typeof calculationInputSchema>;

export type CalculationOutput = {
  seniorityYearsComputed: number;
  seniorityMonths: number;
  seniorityDays: number;
  antiguedadCompensation: number;
  preaviso: number;
  sacSobrePreaviso: number;
  integrationMonth: number;
  proportionalVacation: number;
  proportionalSAC: number;
  total: number;
  breakdown: {
    concept: string;
    amount: number;
    description: string;
  }[];
  metadata: {
    appliedReform: boolean;
    adjustedSalary?: number;
    notes: string[];
  };
};

// Form step types
export type CalculatorStep = 1 | 2 | 3;

export interface FormData {
  startDate: string;
  endDate: string;
  bestMonthlySalary: string;
  dismissalType: CalculationInput['dismissalType'];
  preavisoGiven: boolean;
  includeVariableConcepts: boolean;
  applyReform2026: boolean;
}
