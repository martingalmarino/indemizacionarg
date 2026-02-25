import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guía Completa: Indemnización por Despido en Argentina 2026',
  description:
    'Todo lo que necesitás saber sobre la indemnización por despido sin causa en Argentina. Conceptos, cálculos, plazos y derechos del trabajador.',
};

/* ── Íconos SVG inline ── */
const IconInfo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const IconWarning = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);
const IconCalc = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="16" y2="11" />
    <line x1="8" y1="15" x2="12" y2="15" />
  </svg>
);

export default function GuiaIndemnizacionPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <div className="bg-sand-100 border-b border-ink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 text-xs font-bold text-ink-400 uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-brand-500 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-ink-600">Guías</span>
            <span>/</span>
            <span className="text-ink-600">Indemnización por Despido</span>
          </div>

          <span className="inline-block bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-pill mb-5">
            Actualizado · Febrero 2026
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 leading-tight tracking-tight mb-5">
            Indemnización por Despido sin Causa<br className="hidden sm:block" />
            en Argentina: <span className="text-brand-500">Guía Completa 2026</span>
          </h1>

          <p className="text-lg text-ink-500 leading-relaxed max-w-2xl">
            Entendé tus derechos laborales y cómo se calcula la indemnización por despido
            según la legislación argentina vigente.
          </p>
        </div>
      </div>

      {/* ── Contenido principal ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 items-start">

          {/* Columna principal */}
          <article className="space-y-14 min-w-0">

            {/* ── 1. Qué es ── */}
            <section id="que-es">
              <h2 className="text-2xl font-black text-ink-900 tracking-tight mb-4 pb-3 border-b border-ink-100">
                ¿Qué es la indemnización por despido sin causa?
              </h2>
              <p className="text-ink-600 leading-relaxed mb-6">
                La indemnización por despido sin causa es una compensación económica que el
                empleador debe pagar al trabajador cuando decide finalizar la relación laboral
                sin invocar una causa justificada. Este derecho está regulado por la{' '}
                <strong className="text-ink-900 font-bold">Ley de Contrato de Trabajo (LCT)</strong> y busca proteger al
                trabajador ante la pérdida repentina de su fuente de ingresos.
              </p>
              <div className="flex gap-3 bg-brand-50 border border-brand-100 rounded-card p-4">
                <span className="flex-shrink-0 text-brand-500 mt-0.5"><IconInfo /></span>
                <div>
                  <p className="text-sm font-bold text-ink-900 mb-1">Importante</p>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    El despido sin causa es legal en Argentina, pero el empleador debe
                    indemnizar al trabajador según lo establecido en la ley.
                  </p>
                </div>
              </div>
            </section>

            {/* ── 2. Componentes ── */}
            <section id="componentes">
              <h2 className="text-2xl font-black text-ink-900 tracking-tight mb-4 pb-3 border-b border-ink-100">
                Componentes de la indemnización
              </h2>
              <p className="text-ink-600 leading-relaxed mb-8">
                La liquidación final por despido sin causa incluye varios conceptos que se
                calculan de manera diferente:
              </p>

              <div className="space-y-5">

                {/* Card concepto 1 */}
                <div className="bg-white border border-ink-100 rounded-card p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 flex-shrink-0 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm">1</span>
                    <h3 className="text-base font-black text-ink-900">
                      Indemnización por Antigüedad{' '}
                      <span className="text-ink-400 font-semibold text-sm">(Art. 245 LCT)</span>
                    </h3>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed mb-4">
                    Es el concepto más importante. Se calcula multiplicando el mejor salario
                    mensual de los últimos 12 meses por los años de antigüedad.
                  </p>
                  <ul className="space-y-2">
                    {[
                      { label: 'Fórmula', value: 'Mejor salario mensual × Años de antigüedad' },
                      { label: 'Redondeo', value: 'Si trabajaste más de 3 meses en el último año, se cuenta como un año completo' },
                      { label: 'Mínimo', value: 'Equivale a 1 mes de sueldo (aunque tengas menos de 1 año)' },
                    ].map((it) => (
                      <li key={it.label} className="flex items-start gap-2.5 text-sm text-ink-600">
                        <span className="flex-shrink-0 mt-0.5 w-4 h-4 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center"><IconCheck /></span>
                        <span><strong className="text-ink-800">{it.label}:</strong> {it.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card concepto 2 */}
                <div className="bg-white border border-ink-100 rounded-card p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 flex-shrink-0 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm">2</span>
                    <h3 className="text-base font-black text-ink-900">Preaviso</h3>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed mb-4">
                    Si el empleador no te avisó con anticipación sobre el despido, debe pagarte una
                    indemnización sustitutiva:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { cond: 'Menos de 5 años', val: '1 mes de sueldo' },
                      { cond: '5 años o más', val: '2 meses de sueldo' },
                    ].map((r) => (
                      <div key={r.cond} className="bg-sand-100 rounded-btn px-4 py-3 flex justify-between items-center gap-4">
                        <span className="text-sm font-semibold text-ink-700">{r.cond}</span>
                        <span className="text-sm font-black text-brand-600 flex-shrink-0">{r.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card concepto 3 */}
                <div className="bg-white border border-ink-100 rounded-card p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 flex-shrink-0 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm">3</span>
                    <h3 className="text-base font-black text-ink-900">
                      Integración del Mes{' '}
                      <span className="text-ink-400 font-semibold text-sm">(Art. 233)</span>
                    </h3>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Si el despido ocurre antes de finalizar el mes, el empleador debe pagar los
                    días que faltan hasta fin de mes.
                  </p>
                </div>

                {/* Card concepto 4 */}
                <div className="bg-white border border-ink-100 rounded-card p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 flex-shrink-0 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm">4</span>
                    <h3 className="text-base font-black text-ink-900">SAC sobre Preaviso</h3>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    El aguinaldo proporcional al período de preaviso no trabajado. Se calcula como
                    el preaviso dividido por 12.
                  </p>
                </div>

                {/* Card concepto 5 */}
                <div className="bg-white border border-ink-100 rounded-card p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 flex-shrink-0 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm">5</span>
                    <h3 className="text-base font-black text-ink-900">
                      Vacaciones Proporcionales{' '}
                      <span className="text-ink-400 font-semibold text-sm">(Art. 156)</span>
                    </h3>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed mb-4">
                    Se pagan los días de vacaciones no gozadas, calculados proporcionalmente al
                    tiempo trabajado en el año:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { ant: '< 5 años', dias: '14 días' },
                      { ant: '5–10 años', dias: '21 días' },
                      { ant: '10–20 años', dias: '28 días' },
                      { ant: '> 20 años', dias: '35 días' },
                    ].map((r) => (
                      <div key={r.ant} className="bg-sand-100 rounded-btn px-3 py-3 text-center">
                        <p className="text-xs text-ink-500 font-semibold mb-1">{r.ant}</p>
                        <p className="text-base font-black text-brand-600">{r.dias}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card concepto 6 */}
                <div className="bg-white border border-ink-100 rounded-card p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 flex-shrink-0 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm">6</span>
                    <h3 className="text-base font-black text-ink-900">SAC Proporcional</h3>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed mb-3">
                    El aguinaldo proporcional a los meses trabajados en el semestre.
                  </p>
                  <div className="bg-sand-100 border border-ink-100 rounded-btn px-4 py-2.5 inline-block">
                    <code className="text-sm font-mono text-ink-800">
                      (Mejor salario × Meses del semestre) ÷ 12
                    </code>
                  </div>
                </div>

              </div>
            </section>

            {/* ── 3. Mejor salario ── */}
            <section id="mejor-salario">
              <h2 className="text-2xl font-black text-ink-900 tracking-tight mb-4 pb-3 border-b border-ink-100">
                Mejor salario mensual: ¿qué incluye?
              </h2>
              <p className="text-ink-600 leading-relaxed mb-5">
                El mejor salario mensual se determina considerando la remuneración más alta de
                los últimos 12 meses e incluye:
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  'Sueldo básico',
                  'Horas extras habituales',
                  'Comisiones',
                  'Bonos regulares',
                  'Viáticos sin comprobantes',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-700">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-500 text-white rounded-full flex items-center justify-center">
                      <IconCheck />
                    </span>
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-card p-4">
                <span className="flex-shrink-0 text-amber-500 mt-0.5"><IconWarning /></span>
                <div>
                  <p className="text-sm font-bold text-ink-900 mb-1">Reforma Laboral 2026</p>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Con la Reforma Laboral 2026, algunos conceptos variables pueden excluirse
                    del cálculo. Usá nuestra calculadora con la opción de reforma para ver la
                    diferencia.
                  </p>
                </div>
              </div>
            </section>

            {/* ── 4. Plazos ── */}
            <section id="plazos">
              <h2 className="text-2xl font-black text-ink-900 tracking-tight mb-6 pb-3 border-b border-ink-100">
                Plazos y procedimiento
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-black text-ink-900 mb-2">¿Cuándo debe pagarse la indemnización?</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    El empleador tiene{' '}
                    <strong className="text-ink-900 font-bold">4 días hábiles</strong> desde la finalización de la
                    relación laboral para pagar la liquidación final completa.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-black text-ink-900 mb-4">¿Qué pasa si no me pagan?</h3>
                  <ol className="space-y-3">
                    {[
                      'Enviar un telegrama laboral intimando el pago',
                      'Iniciar un reclamo ante el Ministerio de Trabajo',
                      'Iniciar una acción judicial (recomendado con asesoramiento de abogado laboralista)',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-ink-100 text-ink-700 rounded-full flex items-center justify-center font-black text-xs">
                          {i + 1}
                        </span>
                        <span className="text-sm text-ink-600 leading-relaxed pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            {/* ── 5. Excepciones ── */}
            <section id="excepciones">
              <h2 className="text-2xl font-black text-ink-900 tracking-tight mb-4 pb-3 border-b border-ink-100">
                ¿Cuándo NO corresponde indemnización?
              </h2>
              <p className="text-sm text-ink-600 leading-relaxed mb-5">
                No hay derecho a indemnización en estos casos:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Despido con causa justificada',
                  'Renuncia voluntaria del trabajador',
                  'Jubilación del trabajador',
                  'Vencimiento de contrato a plazo fijo (salvo excepciones)',
                  'Período de prueba (primeros 3 meses)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 bg-sand-50 border border-ink-100 rounded-card px-4 py-3">
                    <svg className="flex-shrink-0 mt-0.5 text-ink-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span className="text-sm text-ink-700 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="bg-brand-500 rounded-card p-8 sm:p-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-card mb-4 text-white">
                <IconCalc />
              </div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                Calculá tu indemnización ahora
              </h3>
              <p className="text-brand-100 mb-6 text-sm leading-relaxed">
                Ingresá tus datos y obtené el resultado en menos de 2 minutos. Gratis, sin registro.
              </p>
              <Link
                href="/calculadora-indemnizacion"
                className="inline-flex items-center gap-2 bg-white hover:bg-brand-50 text-brand-600 font-black px-7 py-3.5 rounded-btn text-sm transition-colors shadow-xl"
              >
                <IconCalc />
                Ir a la Calculadora
                <IconArrow />
              </Link>
            </section>

            {/* ── FAQ ── */}
            <section id="faq">
              <h2 className="text-2xl font-black text-ink-900 tracking-tight mb-6 pb-3 border-b border-ink-100">
                Preguntas frecuentes
              </h2>
              <div className="divide-y divide-ink-100 border border-ink-100 rounded-card overflow-hidden">
                {[
                  {
                    q: '¿La indemnización está alcanzada por impuestos?',
                    a: 'Las indemnizaciones por despido están exentas de Impuesto a las Ganancias hasta cierto monto establecido por AFIP.',
                  },
                  {
                    q: '¿Puedo negociar un acuerdo?',
                    a: 'Sí, es común llegar a acuerdos. Sin embargo, es recomendable que cualquier acuerdo sea homologado por el Ministerio de Trabajo para garantizar tus derechos.',
                  },
                  {
                    q: '¿Qué pasa si estaba en negro?',
                    a: 'Si trabajabas sin estar registrado, tenés derecho a reclamar la registración y todas las indemnizaciones correspondientes, más sanciones adicionales para el empleador.',
                  },
                ].map((item, idx) => (
                  <details key={idx} className="group bg-white">
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-sand-50 transition-colors">
                      <span className="font-bold text-ink-900 text-sm leading-snug">{item.q}</span>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full border border-ink-200 group-open:bg-brand-500 group-open:border-brand-500 flex items-center justify-center transition-all">
                        <svg className="group-open:rotate-45 transition-transform text-ink-500 group-open:text-white" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-5 pt-1">
                      <p className="text-sm text-ink-500 leading-relaxed">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Aviso legal ── */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-card p-4">
              <svg className="flex-shrink-0 text-amber-500 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-xs text-ink-600 leading-relaxed">
                <strong className="text-ink-800">Aviso Legal:</strong> Esta guía tiene fines informativos.
                Para casos específicos, consultá con un abogado laboralista.{' '}
                <span className="font-semibold">Última actualización: Febrero 2026.</span>
              </p>
            </div>

          </article>

          {/* ── Sidebar índice ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 bg-white border border-ink-100 rounded-card p-5 shadow-card">
              <p className="text-xs font-black text-ink-400 uppercase tracking-widest mb-4">En esta guía</p>
              <nav className="space-y-0.5">
                {[
                  { href: '#que-es', label: '¿Qué es?' },
                  { href: '#componentes', label: 'Componentes' },
                  { href: '#mejor-salario', label: 'Mejor salario' },
                  { href: '#plazos', label: 'Plazos y procedimiento' },
                  { href: '#excepciones', label: 'Cuándo no corresponde' },
                  { href: '#faq', label: 'Preguntas frecuentes' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-ink-500 hover:text-brand-500 font-medium px-3 py-2 rounded-btn transition-colors hover:bg-brand-50"
                  >
                    <span className="text-ink-300"><IconArrow /></span>
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-5 pt-5 border-t border-ink-100">
                <Link
                  href="/calculadora-indemnizacion"
                  className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-4 py-3 rounded-btn text-sm transition-colors shadow-btn w-full"
                >
                  <IconCalc />
                  Ir a la Calculadora
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
