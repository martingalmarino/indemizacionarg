import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Calculadora de Indemnización Laboral Argentina 2026 | Cálculo Exacto y Gratuito',
  description:
    'Calculá tu indemnización por despido en Argentina con nuestra herramienta gratuita. Incluye Reforma Laboral 2026, antigüedad, preaviso, vacaciones y SAC. Actualizado con la legislación vigente.',
  openGraph: {
    title: 'Calculadora de Indemnización Laboral Argentina 2026',
    description:
      'Herramienta gratuita para calcular tu indemnización por despido en Argentina. Incluye todos los conceptos según la ley.',
  },
};

/* ─────────────────────────────────────────────────────────
   Íconos SVG inline reutilizables
───────────────────────────────────────────────────────── */
const IconCalc = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/>
    <line x1="8" y1="15" x2="12" y2="15"/>
  </svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);
// Pasos
const IconForm = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconSliders = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
);
const IconBarChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
// Conceptos
const IconBanknote = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/>
    <path d="M6 12h.01M18 12h.01"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconGift = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);
const IconUmbrella = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
  </svg>
);
const IconPercent = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
  </svg>
);
// CTA features
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconScale = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/><path d="M3 18l9 3 9-3"/>
    <path d="M3 6l4 6H3l4-6z" fill="none"/><path d="M21 6l-4 6h-4l4-6z" fill="none"/>
  </svg>
);
const IconSmartphone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════
          1. HERO — fondo blanco, texto negro pesado,
             panel derecho naranja (como Galicia)
      ══════════════════════════════════════════════ */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] items-stretch">

            {/* Columna izquierda — texto */}
            <div className="py-16 lg:py-24 pr-0 lg:pr-16 flex flex-col justify-center">
              <span className="inline-block bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-pill mb-6 w-fit">
                Actualizado · Reforma Laboral 2026
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-ink-900 leading-[1.08] tracking-tight mb-5">
                Calculá tu<br />
                indemnización<br />
                <span className="text-brand-500">en minutos</span>
              </h1>

              <p className="text-lg text-ink-500 leading-relaxed mb-8 max-w-md">
                La herramienta más completa para conocer cuánto te corresponde cobrar por despido.
                Rápido, preciso y <strong className="text-ink-800 font-semibold">100% gratuito</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/calculadora-indemnizacion"
                  className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-7 py-3.5 rounded-btn text-base transition-colors shadow-btn"
                >
                  <IconCalc />
                  Calcular mi indemnización
                </Link>
                <Link
                  href="/guias/indemnizacion-despido"
                  className="inline-flex items-center justify-center gap-2 border border-ink-300 hover:border-ink-500 text-ink-700 font-semibold px-7 py-3.5 rounded-btn text-base transition-colors"
                >
                  Ver guía completa
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-10 pt-10 border-t border-ink-100">
                {[
                  { value: '100%', label: 'Gratuito' },
                  { value: '<2 min', label: 'Resultado' },
                  { value: '6+', label: 'Conceptos' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-ink-900">{s.value}</p>
                    <p className="text-xs text-ink-400 font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — panel naranja con tarjeta resultado */}
            <div className="hidden lg:flex bg-brand-500 items-center justify-center p-10 relative overflow-hidden">
              {/* círculo decorativo */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-400 rounded-full opacity-40" />
              <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-brand-600 rounded-full opacity-30" />

              {/* Tarjeta resultado */}
              <div className="relative bg-white rounded-card shadow-xl p-7 w-80 z-10">
                <p className="text-xs font-bold text-ink-400 uppercase tracking-widest mb-5">Ejemplo de resultado</p>

                <div className="space-y-2.5 mb-5">
                  {[
                    { label: 'Indemnización antigüedad', amount: '$ 480.000', bg: 'bg-brand-50',  text: 'text-brand-700' },
                    { label: 'Preaviso',                  amount: '$ 240.000', bg: 'bg-blue-50',   text: 'text-blue-700' },
                    { label: 'SAC proporcional',          amount: '$  60.000', bg: 'bg-purple-50', text: 'text-purple-700' },
                    { label: 'Vacaciones prop.',          amount: '$  32.000', bg: 'bg-green-50',  text: 'text-green-700' },
                    { label: 'Integración del mes',       amount: '$  48.000', bg: 'bg-amber-50',  text: 'text-amber-700' },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-ink-600 flex-1 leading-snug">{r.label}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${r.bg} ${r.text} flex-shrink-0`}>{r.amount}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-ink-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-ink-900 text-sm">Total estimado</span>
                    <span className="text-2xl font-black text-brand-500">$ 860.000</span>
                  </div>
                  <p className="text-xs text-ink-400 mt-1">Cálculo orientativo</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. BAND naranja — Reforma 2026
      ══════════════════════════════════════════════ */}
      <div className="bg-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white text-sm font-semibold">
            <strong className="font-black">Nuevo:</strong> incluimos la Reforma Laboral 2026 y comparamos ambos regímenes automáticamente.
          </p>
          <Link href="/guias/reforma-laboral-2026" className="text-white text-sm font-black underline underline-offset-2 flex-shrink-0 hover:no-underline">
            Conocer más →
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          3. CÓMO FUNCIONA — fondo blanco, íconos naranja
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-500 text-sm font-bold uppercase tracking-widest mb-2">Simple y rápido</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-3">
              ¿Cómo calcular tu indemnización?
            </h2>
            <p className="text-ink-500 text-lg max-w-xl mx-auto">
              Tres pasos para conocer exactamente cuánto te corresponde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: <IconForm />,
                title: 'Ingresá tus datos',
                desc: 'Fecha de inicio, fin de la relación laboral y tu mejor salario mensual normal y habitual.',
              },
              {
                num: '02',
                icon: <IconSliders />,
                title: 'Configurá opciones',
                desc: 'Elegí si aplicar la Reforma 2026, si te dieron preaviso y el tipo de despido.',
              },
              {
                num: '03',
                icon: <IconBarChart />,
                title: 'Obtenés el resultado',
                desc: 'Desglose detallado de cada concepto: indemnización, preaviso, SAC, vacaciones y más.',
              },
            ].map((step) => (
              <div key={step.num} className="bg-white border border-ink-100 rounded-card p-7 hover:shadow-card-hover transition-shadow">
                <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white font-black text-sm mb-5">
                  {step.num}
                </div>
                <h3 className="text-lg font-black text-ink-900 mb-2">{step.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/calculadora-indemnizacion"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-7 py-3.5 rounded-btn text-sm transition-colors shadow-btn"
            >
              Ir a la calculadora <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. CONCEPTOS — fondo cálido arena
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Texto izquierdo */}
            <div className="lg:col-span-2">
              <p className="text-brand-500 text-sm font-bold uppercase tracking-widest mb-2">Completo</p>
              <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-4">
                Calculamos todos los conceptos de la LCT
              </h2>
              <p className="text-ink-500 leading-relaxed mb-6">
                Todos los rubros obligatorios según la Ley de Contrato de Trabajo, con soporte para la Reforma Laboral 2026.
              </p>
              <Link
                href="/guias/indemnizacion-despido"
                className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-700 font-bold text-sm transition-colors"
              >
                Ver guía completa <IconArrow />
              </Link>
            </div>

            {/* Grid de conceptos */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <IconBanknote />, title: 'Indemnización por Antigüedad', desc: 'Art. 245 LCT — 1 mes por año trabajado', tag: 'Principal' },
                { icon: <IconCalendar />, title: 'Preaviso',                     desc: '1 o 2 meses según antigüedad',           tag: 'Obligatorio' },
                { icon: <IconClock />,   title: 'Integración del Mes',           desc: 'Días restantes hasta fin de mes',        tag: 'Art. 233' },
                { icon: <IconGift />,    title: 'SAC Proporcional',              desc: 'Aguinaldo del semestre trabajado',       tag: 'Incluido' },
                { icon: <IconUmbrella />,title: 'Vacaciones Proporcionales',     desc: 'Según días por antigüedad',              tag: 'Art. 156' },
                { icon: <IconPercent />, title: 'SAC sobre Preaviso',            desc: 'Aguinaldo proporcional al preaviso',     tag: 'Incluido' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-card border border-ink-100 p-5 hover:shadow-card transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-brand-500">{item.icon}</span>
                    <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-pill">{item.tag}</span>
                  </div>
                  <h3 className="font-black text-ink-900 text-sm leading-tight mb-1">{item.title}</h3>
                  <p className="text-xs text-ink-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. CTA BANNER — naranja sólido, como Galicia
      ══════════════════════════════════════════════ */}
      <section className="bg-brand-500 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-400 rounded-full opacity-40 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-600 rounded-full opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                Conocé exactamente cuánto te corresponde cobrar
              </h2>
              <p className="text-brand-100 text-lg leading-relaxed mb-7">
                Sin registro, sin datos personales. Resultado en menos de 2 minutos.
              </p>
              <Link
                href="/calculadora-indemnizacion"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-brand-50 text-brand-600 font-black px-8 py-4 rounded-btn text-base transition-colors shadow-xl"
              >
                <IconCalc />
                Calcular mi indemnización
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <IconZap />,        label: 'Resultado inmediato', sub: 'Menos de 2 minutos' },
                { icon: <IconShield />,     label: 'Sin registro', sub: 'No pedimos datos personales' },
                { icon: <IconScale />,      label: 'Legalmente actualizado', sub: 'Reforma Laboral 2026' },
                { icon: <IconSmartphone />, label: 'En tu celular', sub: 'Funciona en todos los dispositivos' },
              ].map((f) => (
                <div key={f.label} className="bg-white/15 rounded-card border border-white/25 p-5">
                  <div className="text-white mb-2">{f.icon}</div>
                  <p className="font-bold text-white text-sm leading-tight mb-0.5">{f.label}</p>
                  <p className="text-xs text-brand-100">{f.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. FAQ — fondo blanco
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-500 text-sm font-bold uppercase tracking-widest mb-2">Dudas frecuentes</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-3">
              Todo lo que necesitás saber
            </h2>
            <p className="text-ink-500 text-lg">Las preguntas más comunes sobre indemnizaciones laborales</p>
          </div>

          <div className="divide-y divide-ink-100 border border-ink-100 rounded-card overflow-hidden">
            {[
              {
                q: '¿Qué es la indemnización por despido sin causa?',
                a: 'Es la compensación económica que debe pagar el empleador cuando finaliza la relación laboral sin justa causa. Incluye la indemnización por antigüedad (Art. 245), preaviso, integración del mes, SAC proporcional y vacaciones proporcionales.',
              },
              {
                q: '¿Cómo se calcula la antigüedad?',
                a: 'Se cuenta desde la fecha de inicio hasta la fecha de finalización. Si la fracción supera los 3 meses, se redondea al año superior para el cálculo de la indemnización.',
              },
              {
                q: '¿Qué cambia con la Reforma Laboral 2026?',
                a: 'La reforma modifica la base de cálculo excluyendo ciertos conceptos variables (aproximadamente el 15% del salario). Nuestra calculadora te permite comparar ambos regímenes automáticamente.',
              },
              {
                q: '¿Necesito registrarme para usar la calculadora?',
                a: 'No. Es 100% gratuita y no requiere registro ni datos personales. Ingresás tus datos laborales, obtenés el resultado y listo.',
              },
              {
                q: '¿Cuál es el mínimo de antigüedad para cobrar indemnización?',
                a: 'Necesitás al menos 3 meses de antigüedad para la indemnización por despido sin causa. Con menos tiempo, igualmente tenés derecho a preaviso y otros conceptos de la liquidación final.',
              },
            ].map((item, idx) => (
              <details key={idx} className="group bg-white">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-sand-50 transition-colors">
                  <span className="font-bold text-ink-900 text-base leading-snug">{item.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border border-ink-200 group-open:bg-brand-500 group-open:border-brand-500 flex items-center justify-center transition-all">
                    <svg className="group-open:rotate-45 transition-transform text-ink-500 group-open:text-white" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-ink-500 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 border border-ink-300 hover:border-brand-500 hover:text-brand-500 text-ink-700 font-bold px-6 py-3 rounded-btn text-sm transition-colors"
            >
              Ver todas las preguntas <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. FEATURES — fondo blanco, checks naranja
      ══════════════════════════════════════════════ */}
      <section className="py-16 bg-sand-100 border-t border-ink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-ink-900 mb-8">¿Por qué usar nuestra calculadora?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Cálculo según la LCT vigente',
              'Reforma Laboral 2026 incluida',
              'Desglose detallado por concepto',
              'Sin registro ni datos personales',
              'Funciona en celular y computadora',
              'Actualizado en tiempo real',
              'Comparación de regímenes',
              'Resultado en menos de 2 minutos',
            ].map((f) => (
              <div key={f} className="flex items-start gap-2.5 bg-white rounded-card border border-ink-100 px-4 py-3.5 text-left">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-brand-500 text-white rounded-full flex items-center justify-center">
                  <IconCheck />
                </span>
                <span className="text-sm font-semibold text-ink-800 leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. TEXTO SEO
      ══════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-ink-900 mb-4 tracking-tight">
            ¿Cuánto me corresponde por despido en Argentina?
          </h2>
          <p className="text-ink-500 leading-relaxed mb-4">
            La <strong className="text-ink-800">indemnización por despido sin causa</strong> comprende varios conceptos
            según la Ley de Contrato de Trabajo (LCT). El principal es la indemnización por antigüedad del
            Art. 245: un salario mensual por cada año o fracción mayor a tres meses de servicio.
          </p>
          <p className="text-ink-500 leading-relaxed mb-4">
            Con la <strong className="text-ink-800">Reforma Laboral 2026</strong>, se modifica la base de cálculo
            salarial para ciertos conceptos. Nuestra herramienta calcula automáticamente ambos regímenes para
            que conozcas la diferencia.
          </p>
          <p className="text-ink-500 leading-relaxed">
            El cálculo es <strong className="text-ink-800">100% gratuito</strong>, rápido y no requiere registro.
            Obtené el desglose completo en menos de 2 minutos.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. AVISO LEGAL
      ══════════════════════════════════════════════ */}
      <section className="bg-amber-50 border-t border-amber-200 py-7">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3">
          <svg className="flex-shrink-0 text-amber-500 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p className="text-xs text-ink-600 leading-relaxed">
            <strong className="text-ink-800">Aviso Legal:</strong> Los cálculos son estimativos y orientativos,
            basados en la legislación laboral argentina vigente. No constituyen asesoramiento legal.
            Para casos específicos, consultá con un abogado laboralista.{' '}
            <span className="font-semibold">Última actualización: Febrero 2026.</span>
          </p>
        </div>
      </section>

    </div>
  );
}
