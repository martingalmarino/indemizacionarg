import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - Indemnización Laboral Argentina 2026',
  description:
    'Respondemos todas tus dudas sobre indemnización por despido, cálculos, plazos y derechos laborales en Argentina.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tengo para reclamar mi indemnización por despido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tenés 2 años desde la fecha de despido para iniciar un reclamo judicial por indemnización. Sin embargo, es recomendable actuar lo antes posible.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hago si mi empleador no me paga la indemnización?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Primero enviá un telegrama laboral intimando el pago. Si no responde, podés iniciar un reclamo en el Ministerio de Trabajo o una demanda judicial con un abogado laboralista.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La indemnización por despido paga impuestos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las indemnizaciones por despido están exentas de Impuesto a las Ganancias hasta ciertos límites establecidos por AFIP. Generalmente, las indemnizaciones normales no pagan impuestos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se calcula la antigüedad si trabajé menos de un año?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si trabajaste más de 3 meses, se redondea a 1 año completo. Si trabajaste menos de 3 meses pero más del período de prueba, corresponde 1 mes de indemnización.',
      },
    },
  ],
};

/* ── Íconos SVG inline ── */
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

const categories = [
  {
    id: 'generales',
    label: 'Preguntas Generales',
    items: [
      {
        q: '¿Cuánto tiempo tengo para reclamar mi indemnización?',
        a: 'El plazo de prescripción para reclamar indemnización por despido es de 2 años desde la fecha de finalización de la relación laboral. Sin embargo, es recomendable actuar de inmediato para no perder derechos y evitar complicaciones.',
      },
      {
        q: '¿Qué hago si mi empleador no me paga la indemnización?',
        a: null,
        list: {
          type: 'ol' as const,
          items: [
            'Enviá un telegrama laboral intimando el pago',
            'Iniciá un reclamo en el Ministerio de Trabajo (gratuito)',
            'Si no se resuelve, considerá una demanda judicial con abogado',
          ],
          prefix: 'Si tu empleador no te paga en el plazo de 4 días hábiles, seguí estos pasos:',
        },
      },
      {
        q: '¿Puedo cobrar el seguro de desempleo?',
        a: 'Sí, si fuiste despedido sin causa y tenés al menos 6 meses de aportes en el último año (o 12 meses en los últimos 3 años). El monto depende de tu salario y se paga mensualmente durante varios meses.',
      },
      {
        q: '¿La indemnización paga impuestos?',
        a: 'Las indemnizaciones por despido están exentas del Impuesto a las Ganancias hasta ciertos límites establecidos por AFIP. En la mayoría de los casos, no pagás impuestos sobre la indemnización normal.',
      },
    ],
  },
  {
    id: 'calculo',
    label: 'Sobre el Cálculo',
    items: [
      {
        q: '¿Cómo se calcula la antigüedad?',
        a: null,
        list: {
          type: 'ul' as const,
          items: [
            'Si la fracción es mayor a 3 meses, se cuenta un año más',
            'Si es menor o igual a 3 meses, no se cuenta',
            'Ejemplo: 5 años y 4 meses = 6 años. 5 años y 2 meses = 5 años.',
          ],
          prefix: 'La antigüedad se calcula desde la fecha de inicio hasta la fecha de finalización. Reglas de redondeo:',
        },
      },
      {
        q: '¿Qué es el "mejor salario mensual"?',
        a: 'Es la remuneración mensual más alta que cobraste en los últimos 12 meses, incluyendo: sueldo básico, horas extras habituales, comisiones, bonos regulares y viáticos sin comprobantes. Con la Reforma 2026, se excluyen algunos conceptos variables.',
      },
      {
        q: '¿Qué pasa si estaba "en negro" (no registrado)?',
        a: null,
        list: {
          type: 'ul' as const,
          items: [
            'Todas las indemnizaciones como si hubieras estado registrado',
            'Indemnización por falta de registración (equivale a 1/4 de la indemnización por antigüedad)',
            'Sanciones adicionales para el empleador',
            'Aportes jubilatorios y obra social retroactivos',
          ],
          prefix: 'Si trabajabas sin estar registrado, tenés derecho a:',
        },
      },
      {
        q: '¿Cómo afecta el período de prueba?',
        a: 'Durante los primeros 3 meses (período de prueba), cualquiera de las partes puede finalizar la relación laboral sin indemnización. Después del período de prueba, sí corresponde indemnización.',
      },
    ],
  },
  {
    id: 'reforma',
    label: 'Sobre la Reforma 2026',
    items: [
      {
        q: '¿Me afecta la Reforma Laboral 2026?',
        a: 'La reforma se aplica principalmente a relaciones laborales iniciadas desde enero 2026. Si ya estabas trabajando antes, seguís con el régimen tradicional, salvo que ambas partes acuerden aplicar la nueva normativa por escrito.',
      },
      {
        q: '¿Cuánto menos cobro con la Reforma 2026?',
        a: 'En promedio, la reducción es del 10-15% del monto total de indemnización, ya que se excluyen conceptos variables del cálculo. Usá nuestra calculadora con el "Modo Comparación" para ver tu caso específico.',
      },
    ],
  },
  {
    id: 'tramites',
    label: 'Trámites y Procedimientos',
    items: [
      {
        q: '¿Necesito un abogado para cobrar mi indemnización?',
        a: 'No es obligatorio si tu empleador paga voluntariamente. Sin embargo, es recomendable consultar con un abogado laboralista si: el empleador se niega a pagar, hay conflictos sobre el monto, querés homologar un acuerdo, o fuiste despedido con causa injustamente.',
      },
      {
        q: '¿Puedo negociar un acuerdo con mi empleador?',
        a: 'Sí, es común llegar a acuerdos. Cualquier acuerdo debe ser homologado por el Ministerio de Trabajo o ratificado ante escribano para que sea válido y no pierdas derechos.',
      },
      {
        q: '¿Cuánto tarda un juicio laboral?',
        a: 'Un juicio laboral puede durar entre 1 y 3 años, dependiendo de la complejidad del caso y la jurisdicción. Durante el proceso, pueden llegar a acuerdos conciliatorios que aceleren la resolución.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white">

        {/* ── Hero ── */}
        <div className="bg-sand-100 border-b border-ink-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="flex items-center gap-2 text-xs font-bold text-ink-400 uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-brand-500 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-ink-600">Preguntas Frecuentes</span>
            </div>

            <span className="inline-block bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-pill mb-5">
              Actualizado · Febrero 2026
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 leading-tight tracking-tight mb-4">
              Preguntas <span className="text-brand-500">Frecuentes</span>
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed max-w-2xl">
              Resolvemos las dudas más comunes sobre indemnización por despido en Argentina
            </p>
          </div>
        </div>

        {/* ── Contenido ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-12">

            {categories.map((cat, catIdx) => (
              <section key={cat.id} id={cat.id}>
                {/* Encabezado de categoría */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 flex-shrink-0 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm">
                    {catIdx + 1}
                  </span>
                  <h2 className="text-xl font-black text-ink-900 tracking-tight">{cat.label}</h2>
                </div>

                {/* Accordions */}
                <div className="divide-y divide-ink-100 border border-ink-100 rounded-card overflow-hidden">
                  {cat.items.map((item, idx) => (
                    <details key={idx} className="group bg-white">
                      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-sand-50 transition-colors">
                        <span className="font-bold text-ink-900 text-sm leading-snug">{item.q}</span>
                        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-ink-200 group-open:bg-brand-500 group-open:border-brand-500 flex items-center justify-center transition-all">
                          <svg
                            className="group-open:rotate-45 transition-transform text-ink-500 group-open:text-white"
                            width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-5 pt-1">
                        {item.a ? (
                          <p className="text-sm text-ink-500 leading-relaxed">{item.a}</p>
                        ) : item.list ? (
                          <>
                            <p className="text-sm text-ink-500 leading-relaxed mb-3">{item.list.prefix}</p>
                            {item.list.type === 'ol' ? (
                              <ol className="space-y-2">
                                {item.list.items.map((li, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-5 h-5 bg-ink-100 text-ink-700 rounded-full flex items-center justify-center font-black text-xs mt-0.5">
                                      {i + 1}
                                    </span>
                                    <span className="text-sm text-ink-500 leading-relaxed">{li}</span>
                                  </li>
                                ))}
                              </ol>
                            ) : (
                              <ul className="space-y-2">
                                {item.list.items.map((li, i) => (
                                  <li key={i} className="flex items-start gap-2.5">
                                    <svg className="flex-shrink-0 mt-0.5 text-brand-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20,6 9,17 4,12" />
                                    </svg>
                                    <span className="text-sm text-ink-500 leading-relaxed">{li}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : null}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}

            {/* ── CTA Banner ── */}
            <section className="bg-brand-500 rounded-card p-8 sm:p-10 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-400 rounded-full opacity-30 pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-brand-600 rounded-full opacity-25 pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-card mb-4 text-white">
                  <IconCalc />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                  ¿Listo para calcular tu indemnización?
                </h3>
                <p className="text-brand-100 mb-6 text-sm leading-relaxed">
                  Usá nuestra calculadora gratuita y obtené el desglose detallado en menos de 2 minutos.
                </p>
                <Link
                  href="/calculadora-indemnizacion"
                  className="inline-flex items-center gap-2 bg-white hover:bg-brand-50 text-brand-600 font-black px-7 py-3.5 rounded-btn text-sm transition-colors shadow-xl"
                >
                  <IconCalc />
                  Calcular Ahora
                  <IconArrow />
                </Link>
              </div>
            </section>

            {/* ── Aviso legal ── */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-card p-4">
              <svg className="flex-shrink-0 text-amber-500 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-xs text-ink-600 leading-relaxed">
                <strong className="text-ink-800">Aviso Legal:</strong> Las respuestas son informativas y basadas en la
                legislación vigente. Para casos específicos, consultá con un abogado laboralista.{' '}
                <span className="font-semibold">Última actualización: Febrero 2026.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
