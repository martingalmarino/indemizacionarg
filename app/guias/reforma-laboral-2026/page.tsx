import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reforma Laboral 2026 Argentina: Cambios en el Cálculo de Indemnización',
  description:
    'Conocé los cambios que introduce la Reforma Laboral 2026 en Argentina y cómo afecta el cálculo de tu indemnización por despido.',
};

export default function ReformaLaboral2026Page() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <div className="bg-sand-100 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center gap-2 text-xs text-ink-400 mb-6">
            <Link href="/" className="hover:text-brand-500 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/guias/indemnizacion-despido" className="hover:text-brand-500 transition-colors">Guías</Link>
            <span>/</span>
            <span className="text-ink-600 font-medium">Reforma Laboral 2026</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-pill">Actualizado Feb 2026</span>
            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-pill">Novedad legislativa</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mb-4">
            Reforma Laboral 2026:{' '}
            <span className="text-brand-500">qué cambia en tu indemnización</span>
          </h1>
          <p className="text-lg text-ink-500 max-w-2xl leading-relaxed">
            La Reforma Laboral 2026 redefine la base de cálculo salarial para las indemnizaciones.
            Entendé cómo te afecta y qué podés hacer.
          </p>
        </div>
      </div>

      {/* ── CONTENIDO ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">

          {/* ── ARTÍCULO ── */}
          <article className="space-y-12 min-w-0">

            {/* Alerta principal */}
            <div className="bg-amber-50 border border-amber-200 rounded-card p-5 flex gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-amber-800 mb-1">Cambio principal</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  La reforma modifica la base de cálculo salarial excluyendo conceptos variables,
                  lo que puede <strong>reducir el monto de la indemnización aproximadamente un 15%</strong>.
                </p>
              </div>
            </div>

            {/* Sección 1 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0">1</div>
                <h2 className="text-2xl font-black text-ink-900 tracking-tight">¿Qué es la Reforma Laboral 2026?</h2>
              </div>
              <div className="border border-ink-100 rounded-card divide-y divide-ink-100">
                <div className="p-6">
                  <p className="text-ink-600 leading-relaxed">
                    La Reforma Laboral 2026 es un conjunto de modificaciones a la Ley de Contrato de
                    Trabajo que busca modernizar las relaciones laborales en Argentina. Su cambio más
                    significativo es la <strong className="text-ink-800">redefinición del salario base</strong> para
                    el cálculo de indemnizaciones por despido sin causa.
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-ink-700 mb-3">¿A quiénes aplica?</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Nuevas relaciones laborales iniciadas desde enero 2026',
                      'Relaciones existentes si ambas partes lo acuerdan por escrito',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
                        <svg className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-ink-400">
                    <strong className="text-ink-600">No se aplica retroactivamente</strong> a relaciones laborales anteriores, salvo acuerdo expreso.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 2 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0">2</div>
                <h2 className="text-2xl font-black text-ink-900 tracking-tight">Principales cambios en las indemnizaciones</h2>
              </div>
              <div className="space-y-4">
                <div className="border border-ink-100 rounded-card p-6">
                  <h3 className="font-black text-ink-900 mb-3">Exclusión de conceptos variables</h3>
                  <p className="text-sm text-ink-500 mb-4">La reforma establece que los siguientes conceptos <strong className="text-ink-700">no se incluyen</strong> en la base de cálculo:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Horas extras no habituales', 'Bonos por productividad ocasionales', 'Premios por objetivos', 'Comisiones variables'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0" />
                        <span className="text-ink-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-ink-100 rounded-card p-6">
                  <h3 className="font-black text-ink-900 mb-4">Ejemplo comparativo</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-ink-50 rounded-lg p-4">
                      <p className="text-xs font-bold text-ink-400 uppercase tracking-wider mb-3">Régimen tradicional</p>
                      <p className="text-sm text-ink-600 mb-1">Salario mensual total</p>
                      <p className="text-2xl font-black text-ink-900">$1.000.000</p>
                      <p className="text-xs text-ink-400 mt-1">Base de cálculo = $1.000.000</p>
                    </div>
                    <div className="bg-brand-50 border border-brand-100 rounded-lg p-4">
                      <p className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-3">Reforma 2026</p>
                      <p className="text-sm text-ink-600 mb-1">Base (excluye variables)</p>
                      <p className="text-2xl font-black text-ink-900">$850.000</p>
                      <p className="text-xs text-ink-400 mt-1">−$150.000 en la base</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
                    <p className="text-sm text-amber-800">
                      <strong>Diferencia en indemnización (5 años de antigüedad):</strong> $750.000 menos bajo la reforma
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sección 3 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0">3</div>
                <h2 className="text-2xl font-black text-ink-900 tracking-tight">¿Qué conceptos NO cambian?</h2>
              </div>
              <div className="border border-ink-100 rounded-card divide-y divide-ink-100">
                {[
                  { label: 'Cálculo de años de antigüedad', desc: 'La fórmula 1 mes por año sigue igual' },
                  { label: 'Plazos de preaviso', desc: 'Mismos períodos según antigüedad' },
                  { label: 'Vacaciones proporcionales', desc: 'Cálculo sin cambios' },
                  { label: 'SAC proporcional', desc: 'Se mantiene idéntico' },
                  { label: 'Indemnizaciones especiales', desc: 'Doble indemnización, Art. 2, etc.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 px-5 py-4">
                    <svg className="w-5 h-5 text-brand-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-ink-800">{item.label}</p>
                      <p className="text-xs text-ink-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sección 4 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0">4</div>
                <h2 className="text-2xl font-black text-ink-900 tracking-tight">Ventajas y desventajas</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-ink-100 rounded-card p-6">
                  <p className="text-xs font-bold text-ink-400 uppercase tracking-wider mb-4">Para trabajadores</p>
                  <p className="text-xs font-bold text-red-500 mb-2">Desventajas</p>
                  <ul className="space-y-2 mb-4">
                    {['Menor monto de indemnización en caso de despido', 'Posible reducción del poder de negociación'].map(i => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-600">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-bold text-green-600 mb-2">Ventajas potenciales</p>
                  <ul className="space-y-2">
                    {['Mayor claridad sobre qué conceptos se incluyen', 'Menos litigiosidad sobre el cálculo del "mejor salario"'].map(i => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-ink-100 rounded-card p-6">
                  <p className="text-xs font-bold text-ink-400 uppercase tracking-wider mb-4">Para empleadores</p>
                  <p className="text-xs font-bold text-green-600 mb-2">Ventajas</p>
                  <ul className="space-y-2">
                    {['Reducción de costos por indemnizaciones', 'Mayor previsibilidad en los cálculos'].map(i => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Sección 5 */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0">5</div>
                <h2 className="text-2xl font-black text-ink-900 tracking-tight">Recomendaciones</h2>
              </div>
              <div className="border border-ink-100 rounded-card divide-y divide-ink-100">
                {[
                  { n: '01', title: 'Conocé tu recibo de sueldo', desc: 'Identificá qué conceptos son fijos y cuáles variables antes de negociar.' },
                  { n: '02', title: 'Guardá documentación', desc: 'Conservá todos tus recibos de sueldo y contratos firmados.' },
                  { n: '03', title: 'Consultá un abogado', desc: 'Ante cualquier duda sobre qué régimen te corresponde.' },
                  { n: '04', title: 'Acordá por escrito', desc: 'Si tu empleador propone aplicar la reforma a tu contrato existente, exigí que conste por escrito.' },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-4 px-5 py-5">
                    <div className="w-8 h-8 bg-ink-100 text-ink-600 rounded-lg flex items-center justify-center font-black text-xs flex-shrink-0">
                      {item.n}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink-800 mb-0.5">{item.title}</p>
                      <p className="text-sm text-ink-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA banner */}
            <div className="relative bg-brand-500 rounded-card p-8 overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-400/30 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-brand-600/30 rounded-full -translate-x-10 translate-y-10 pointer-events-none" />
              <div className="relative">
                <h2 className="text-xl font-black text-white mb-2">Compará ambos regímenes en segundos</h2>
                <p className="text-white/80 text-sm mb-6">Ingresá tus datos y la calculadora te muestra el resultado bajo el régimen tradicional y la Reforma 2026 lado a lado.</p>
                <Link
                  href="/calculadora-indemnizacion"
                  className="inline-block bg-white text-brand-500 font-black text-sm px-7 py-3 rounded-btn hover:bg-sand-100 transition-colors shadow-btn"
                >
                  Calcular mi indemnización →
                </Link>
              </div>
            </div>

            {/* Aviso legal */}
            <div className="bg-amber-50 border border-amber-200 rounded-card px-5 py-4 flex gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 flex-shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="text-xs text-amber-700 leading-relaxed">
                <strong>Aviso Legal:</strong> La información sobre la Reforma Laboral 2026 está sujeta a cambios
                normativos y jurisprudenciales. Consultá con un abogado laboralista para casos específicos.
                Última actualización: Febrero 2026.
              </p>
            </div>

          </article>

          {/* ── SIDEBAR ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="border border-ink-100 rounded-card p-5">
                <p className="text-xs font-bold text-ink-400 uppercase tracking-wider mb-4">En esta guía</p>
                <nav className="space-y-1">
                  {['¿Qué es la reforma?', 'Principales cambios', 'Qué NO cambia', 'Ventajas y desventajas', 'Recomendaciones'].map((item, i) => (
                    <div key={item} className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-sand-100 transition-colors cursor-pointer group">
                      <span className="text-xs font-black text-brand-500 w-4">{`0${i + 1}`}</span>
                      <span className="text-sm text-ink-600 group-hover:text-ink-900 transition-colors">{item}</span>
                    </div>
                  ))}
                </nav>
              </div>
              <div className="bg-brand-500 rounded-card p-5 text-center">
                <p className="text-white font-black text-sm mb-1">¿Cuánto te corresponde?</p>
                <p className="text-white/70 text-xs mb-4">Calculalo gratis en 2 minutos</p>
                <Link href="/calculadora-indemnizacion" className="block bg-white text-brand-500 font-black text-xs px-4 py-2.5 rounded-btn hover:bg-sand-100 transition-colors">
                  Ir a la calculadora →
                </Link>
              </div>
              <div className="border border-ink-100 rounded-card p-5">
                <p className="text-xs font-bold text-ink-400 uppercase tracking-wider mb-4">Guías relacionadas</p>
                <div className="space-y-2">
                  {[
                    { href: '/guias/indemnizacion-despido', label: 'Indemnización por despido' },
                    { href: '/guias/liquidacion-final', label: 'Liquidación final' },
                    { href: '/guias/preaviso', label: 'Preaviso' },
                    { href: '/faq', label: 'Preguntas frecuentes' },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} className="flex items-center gap-2 text-sm text-ink-600 hover:text-brand-500 transition-colors py-1">
                      <span className="w-1 h-1 bg-ink-300 rounded-full" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
