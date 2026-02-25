'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';
import { Share2, FileText, RefreshCw, Download } from 'lucide-react';
import { Input, Select, Checkbox } from '@/components/FormFields';
import { calculateIndemnization, formatCurrency } from '@/lib/calc';
import { calculationInputSchema, type FormData, type CalculationOutput } from '@/lib/types';
import { saveCalculation, loadLastCalculation, generateShareUrl, parseUrlParams } from '@/lib/utils';
import { format } from 'date-fns';

export default function CalculatorPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>({
    startDate: '',
    endDate: '',
    bestMonthlySalary: '',
    dismissalType: 'without_cause',
    preavisoGiven: false,
    includeVariableConcepts: true,
    applyReform2026: false,
  });
  // Display value for the salary field (formatted with dots)
  const [salaryDisplay, setSalaryDisplay] = useState('');
  const [result, setResult] = useState<CalculationOutput | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [comparisonMode, setComparisonMode] = useState(false);
  const [comparisonResult, setComparisonResult] = useState<CalculationOutput | null>(null);

  // Load data from URL or localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const urlParams = parseUrlParams(searchParams);
      
      if (urlParams) {
        setFormData(prev => ({ ...prev, ...urlParams }));
        if (urlParams.bestMonthlySalary) {
          setSalaryDisplay(Number(urlParams.bestMonthlySalary).toLocaleString('es-AR', { maximumFractionDigits: 0 }));
        }
      } else {
        const lastCalc = loadLastCalculation();
        if (lastCalc) {
          setFormData(lastCalc);
          if (lastCalc.bestMonthlySalary) {
            setSalaryDisplay(Number(lastCalc.bestMonthlySalary).toLocaleString('es-AR', { maximumFractionDigits: 0 }));
          }
        }
      }
    }
  }, []);

  // Format a numeric string with thousand-separator dots (Argentine convention)
  const formatSalary = (raw: string): string => {
    const digits = raw.replace(/\D/g, '');
    if (!digits) return '';
    return Number(digits).toLocaleString('es-AR', { maximumFractionDigits: 0 });
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only digits and dots while typing
    const typed = e.target.value.replace(/[^\d.]/g, '');
    // Keep raw digits for state
    const raw = typed.replace(/\./g, '');
    setSalaryDisplay(formatSalary(raw));
    setFormData((prev) => ({ ...prev, bestMonthlySalary: raw }));
  };

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.startDate) {
      newErrors.startDate = 'La fecha de inicio es requerida';
    }
    if (!formData.endDate) {
      newErrors.endDate = 'La fecha de finalización es requerida';
    }
    if (!formData.bestMonthlySalary || Number(formData.bestMonthlySalary) <= 0) {
      newErrors.bestMonthlySalary = 'Ingresá un salario válido';
    }

    if (formData.startDate && formData.endDate && new Date(formData.startDate) >= new Date(formData.endDate)) {
      newErrors.endDate = 'La fecha de fin debe ser posterior a la de inicio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2) {
      calculateResult();
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2);
    }
  };

  const calculateResult = () => {
    try {
      const input = {
        ...formData,
        bestMonthlySalary: Number(formData.bestMonthlySalary),
      };

      const validated = calculationInputSchema.parse(input);
      const calculation = calculateIndemnization(validated);
      setResult(calculation);
      saveCalculation(formData);

      // If comparison mode, calculate with opposite reform setting
      if (comparisonMode) {
        const comparisonInput = { ...validated, applyReform2026: !validated.applyReform2026 };
        const comparisonCalc = calculateIndemnization(comparisonInput);
        setComparisonResult(comparisonCalc);
      }
    } catch (error) {
      console.error('Calculation error:', error);
      setErrors({ general: 'Error en el cálculo. Verificá los datos ingresados.' });
    }
  };

  const handleShare = () => {
    const url = generateShareUrl(formData);
    if (navigator.share) {
      navigator.share({ title: 'Mi Cálculo de Indemnización', url });
    } else {
      navigator.clipboard.writeText(url);
      alert('Enlace copiado al portapapeles');
    }
  };

  const handleDownloadPDF = () => {
    // Simplified PDF generation - in production use a proper library
    window.print();
  };

  const resetCalculator = () => {
    setStep(1);
    setResult(null);
    setComparisonResult(null);
    setErrors({});
    setSalaryDisplay('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-ink-900 mb-4 tracking-tight">
          Calculadora de Indemnización
        </h1>
        <p className="text-lg text-ink-500">
          Completá los datos para calcular tu indemnización por despido
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  s === step
                    ? 'bg-brand-500 text-white'
                    : s < step
                    ? 'bg-brand-100 text-brand-700'
                    : 'bg-ink-100 text-ink-400'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 h-0.5 transition-colors ${
                    s < step ? 'bg-brand-500' : 'bg-ink-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Basic Information */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Paso 1: Datos Básicos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Input
                label="Fecha de inicio de la relación laboral"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                error={errors.startDate}
              />

              <Input
                label="Fecha de finalización de la relación laboral"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                error={errors.endDate}
              />

              <Input
                label="Mejor salario mensual (bruto en ARS)"
                type="text"
                inputMode="numeric"
                placeholder="1.500.000"
                value={salaryDisplay}
                onChange={handleSalaryChange}
                error={errors.bestMonthlySalary}
                helperText="Ingresá el importe bruto. Separador de miles: punto (ej: 1.500.000)"
              />

              <Select
                label="Tipo de despido"
                value={formData.dismissalType}
                onChange={(e) => setFormData({ ...formData, dismissalType: e.target.value as any })}
                options={[
                  { value: 'without_cause', label: 'Despido sin causa' },
                  { value: 'with_cause', label: 'Despido con causa' },
                  { value: 'resignation', label: 'Renuncia' },
                ]}
              />

              <div className="flex justify-end pt-4">
                <Button onClick={handleNext} size="lg">
                  Siguiente
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Additional Options */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Paso 2: Opciones Adicionales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Checkbox
                label="¿Te dieron preaviso?"
                checked={formData.preavisoGiven}
                onChange={(e) => setFormData({ ...formData, preavisoGiven: e.target.checked })}
                helperText="Marcá si tu empleador te notificó con anticipación"
              />

              <Checkbox
                label="Aplicar Reforma Laboral 2026"
                checked={formData.applyReform2026}
                onChange={(e) => setFormData({ ...formData, applyReform2026: e.target.checked })}
                helperText="La reforma excluye conceptos variables del cálculo (~15% reducción)"
              />

              <Checkbox
                label="Modo comparación"
                checked={comparisonMode}
                onChange={(e) => setComparisonMode(e.target.checked)}
                helperText="Compará régimen tradicional vs Reforma 2026"
              />

              <div className="flex justify-between pt-4">
                <Button onClick={handleBack} variant="outline">
                  Atrás
                </Button>
                <Button onClick={handleNext} size="lg">
                  Calcular
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Results */}
      {step === 3 && result && (
        <div className="space-y-5">

          {/* ── Total ── */}
          <div className="bg-brand-500 rounded-card px-8 py-10 text-center relative overflow-hidden">
            {/* decorative circles */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-400 rounded-full opacity-30 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-brand-600 rounded-full opacity-25 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
                Indemnización Total
              </p>
              <p className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tight">
                {formatCurrency(result.total)}
              </p>
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-pill">
                Antigüedad: {result.seniorityYearsComputed} {result.seniorityYearsComputed === 1 ? 'año' : 'años'}
                {result.seniorityMonths > 0 && `, ${result.seniorityMonths} ${result.seniorityMonths === 1 ? 'mes' : 'meses'}`}
              </span>
            </div>
          </div>

          {/* ── Desglose ── */}
          <div className="bg-white border border-ink-100 rounded-card shadow-card overflow-hidden">
            <div className="px-6 py-4 border-b border-ink-100">
              <h3 className="font-black text-ink-900 text-lg tracking-tight">Desglose detallado</h3>
            </div>
            <div className="divide-y divide-ink-100">
              {result.breakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between gap-4 px-6 py-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-ink-900 text-sm leading-snug">{item.concept}</p>
                    <p className="text-xs text-ink-400 mt-0.5 leading-snug">{item.description}</p>
                  </div>
                  <p className="font-black text-ink-900 text-base flex-shrink-0">
                    {formatCurrency(item.amount)}
                  </p>
                </div>
              ))}
            </div>
            {/* Total row */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 bg-brand-50 border-t-2 border-brand-200">
              <p className="font-black text-ink-900">Total</p>
              <p className="font-black text-brand-600 text-xl">{formatCurrency(result.total)}</p>
            </div>

            {result.metadata.notes.length > 0 && (
              <div className="px-6 py-4 bg-amber-50 border-t border-amber-100">
                <p className="font-bold text-ink-800 text-xs uppercase tracking-widest mb-2">Notas</p>
                {result.metadata.notes.map((note, i) => (
                  <p key={i} className="text-xs text-ink-600 leading-relaxed">• {note}</p>
                ))}
              </div>
            )}
          </div>

          {/* ── Comparación ── */}
          {comparisonMode && comparisonResult && (
            <div className="bg-white border border-ink-100 rounded-card shadow-card overflow-hidden">
              <div className="px-6 py-4 border-b border-ink-100">
                <h3 className="font-black text-ink-900 text-lg tracking-tight">Comparación: Tradicional vs Reforma 2026</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="text-center p-5 bg-sand-100 rounded-card border border-ink-100">
                    <p className="text-xs font-bold text-ink-400 uppercase tracking-widest mb-2">Régimen Tradicional</p>
                    <p className="text-2xl font-black text-ink-900">
                      {formatCurrency(formData.applyReform2026 ? comparisonResult.total : result.total)}
                    </p>
                  </div>
                  <div className="text-center p-5 bg-brand-50 rounded-card border border-brand-100">
                    <p className="text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Reforma 2026</p>
                    <p className="text-2xl font-black text-brand-600">
                      {formatCurrency(formData.applyReform2026 ? result.total : comparisonResult.total)}
                    </p>
                  </div>
                </div>
                <div className="text-center bg-ink-50 rounded-btn py-3 px-4">
                  <p className="text-sm text-ink-500">
                    Diferencia:{' '}
                    <span className="font-black text-ink-900">
                      {formatCurrency(Math.abs(result.total - comparisonResult.total))}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ── Acciones ── */}
          <div className="flex flex-wrap gap-3">
            <Button onClick={handleShare} variant="outline">
              <Share2 className="inline-block mr-2" size={15} />
              Compartir
            </Button>
            <Button onClick={handleDownloadPDF} variant="outline">
              <FileText className="inline-block mr-2" size={15} />
              Exportar PDF
            </Button>
            <Button onClick={resetCalculator} variant="ghost">
              <RefreshCw className="inline-block mr-2" size={15} />
              Nuevo Cálculo
            </Button>
          </div>

        </div>
      )}
    </div>
  );
}
