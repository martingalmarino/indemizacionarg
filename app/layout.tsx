import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://calculadoralaboral.com.ar'),
  title: {
    default: 'Calculadora de Indemnización Laboral Argentina 2026 | Cálculo Exacto',
    template: '%s | Calculadora Indemnización Argentina',
  },
  description:
    'Calculá tu indemnización por despido en Argentina de forma precisa y gratuita. Incluye Reforma Laboral 2026, antigüedad, preaviso, vacaciones y SAC. Herramienta actualizada con la legislación vigente.',
  keywords: [
    'calculadora indemnizacion laboral argentina',
    'indemnizacion por despido',
    'liquidacion final',
    'reforma laboral 2026',
    'calculo indemnizacion',
    'despido sin causa',
    'preaviso',
    'antiguedad',
  ],
  authors: [{ name: 'Calculadora Indemnización Argentina' }],
  creator: 'Calculadora Indemnización Argentina',
  publisher: 'Calculadora Indemnización Argentina',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-icon', type: 'image/png', sizes: '180x180' }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://calculadoralaboral.com.ar',
    title: 'Calculadora de Indemnización Laboral Argentina 2026',
    description:
      'Calculá tu indemnización por despido en Argentina. Incluye Reforma 2026, preaviso, vacaciones y más.',
    siteName: 'Calculadora Indemnización Argentina',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Indemnización Laboral Argentina 2026',
    description:
      'Calculá tu indemnización por despido en Argentina de forma precisa y gratuita.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'UC8hs6h5YDCVeAsp01VgpSVYtsmIZacGBwW6xYeaO1A',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={inter.variable}>
      <body>
        <div className="min-h-screen flex flex-col">

          {/* ── HEADER ── */}
          <header className="bg-white border-b border-ink-100 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3 flex-shrink-0 group">
                <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-brand-600 transition-colors">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2"/>
                    <line x1="8" y1="7" x2="16" y2="7"/>
                    <line x1="8" y1="11" x2="16" y2="11"/>
                    <line x1="8" y1="15" x2="12" y2="15"/>
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-black text-ink-900 text-[15px] tracking-tight">Calculadora</span>
                  <span className="font-bold text-brand-500 text-[12px] tracking-wide uppercase mt-0.5">Indemnización</span>
                </div>
              </a>

              {/* Nav desktop */}
              <div className="hidden md:flex items-center gap-1">
                <a href="/calculadora-indemnizacion" className="text-sm text-ink-600 hover:text-ink-900 font-semibold px-3 py-2 rounded-md hover:bg-ink-50 transition-all">
                  Calculadora
                </a>
                <a href="/guias/indemnizacion-despido" className="text-sm text-ink-600 hover:text-ink-900 font-semibold px-3 py-2 rounded-md hover:bg-ink-50 transition-all">
                  Guías
                </a>
                <a href="/faq" className="text-sm text-ink-600 hover:text-ink-900 font-semibold px-3 py-2 rounded-md hover:bg-ink-50 transition-all">
                  FAQ
                </a>
                <a
                  href="/calculadora-indemnizacion"
                  className="ml-3 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold px-5 py-2.5 rounded-btn transition-colors shadow-btn"
                >
                  Calcular gratis
                </a>
              </div>

              {/* Mobile: CTA + hamburger */}
              <div className="flex md:hidden items-center gap-2">
                <a href="/calculadora-indemnizacion" className="bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold px-4 py-2 rounded-btn transition-colors">
                  Calcular
                </a>
                <label htmlFor="mobile-menu-toggle" className="cursor-pointer p-1.5 rounded-md hover:bg-ink-50 transition-colors" aria-label="Abrir menú">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="text-ink-700">
                    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                </label>
              </div>
            </nav>

            {/* Mobile dropdown menu */}
            <input type="checkbox" id="mobile-menu-toggle" className="hidden peer/menu" />
            <div className="hidden peer-checked/menu:block md:hidden bg-white border-t border-ink-100 px-4 py-3 space-y-1 shadow-lg">
              <a href="/calculadora-indemnizacion" className="flex items-center gap-3 text-sm font-semibold text-ink-700 hover:text-brand-500 px-3 py-3 rounded-md hover:bg-sand-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="12" y2="15"/></svg>
                Calculadora
              </a>
              <a href="/guias/indemnizacion-despido" className="flex items-center gap-3 text-sm font-semibold text-ink-700 hover:text-brand-500 px-3 py-3 rounded-md hover:bg-sand-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Guía de indemnización
              </a>
              <a href="/guias/reforma-laboral-2026" className="flex items-center gap-3 text-sm font-semibold text-ink-700 hover:text-brand-500 px-3 py-3 rounded-md hover:bg-sand-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Reforma Laboral 2026
              </a>
              <a href="/faq" className="flex items-center gap-3 text-sm font-semibold text-ink-700 hover:text-brand-500 px-3 py-3 rounded-md hover:bg-sand-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Preguntas Frecuentes
              </a>
              <div className="pt-2 pb-1 border-t border-ink-100 mt-2">
                <a href="/calculadora-indemnizacion" className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm px-5 py-3 rounded-btn transition-colors">
                  Calcular mi indemnización →
                </a>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* ── FOOTER ── */}
          <footer className="bg-ink-900 text-ink-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
                <div className="col-span-2 sm:col-span-2 lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center shadow-sm">
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2"/>
                        <line x1="8" y1="7" x2="16" y2="7"/>
                        <line x1="8" y1="11" x2="16" y2="11"/>
                        <line x1="8" y1="15" x2="12" y2="15"/>
                      </svg>
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="font-black text-white text-[15px] tracking-tight">Calculadora</span>
                      <span className="font-bold text-brand-400 text-[12px] tracking-wide uppercase mt-0.5">Indemnización</span>
                    </div>
                  </div>
                  <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
                    Herramienta gratuita para calcular tu indemnización laboral en Argentina. Actualizado con la Reforma Laboral 2026.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Herramientas</h4>
                  <ul className="space-y-2.5 text-sm">
                    {[
                      ['/calculadora-indemnizacion', 'Calculadora'],
                      ['/guias/indemnizacion-despido', 'Guía de Indemnización'],
                      ['/guias/reforma-laboral-2026', 'Reforma Laboral 2026'],
                      ['/faq', 'Preguntas Frecuentes'],
                    ].map(([href, label]) => (
                      <li key={href}>
                        <a href={href} className="text-ink-400 hover:text-brand-400 transition-colors">{label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Legal</h4>
                  <p className="text-xs text-ink-500 leading-relaxed">
                    Cálculos estimativos y orientativos. No constituyen asesoramiento legal. Consultá con un abogado laboralista.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Otras Calculadoras</h4>
                  <ul className="space-y-2.5 text-sm">
                    {[
                      ['https://calculadorapatentes.ar/', 'Calculadora de Patentes Argentina'],
                      ['https://patentearba.com/', 'Calculadora Patente ARBA'],
                      ['https://www.alquilercalc.com.ar/', 'Calculadora Aumento de Alquiler'],
                    ].map(([href, label]) => (
                      <li key={href}>
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-brand-400 transition-colors">{label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
                <p className="text-xs text-ink-600">© 2026 Calculadora Indemnización Argentina. Todos los derechos reservados.</p>
                <p className="text-xs text-ink-500">Desarrollado por <a href="mailto:m.galmarino@gmail.com" className="hover:text-brand-400 transition-colors">Martín Galmarino</a> 🤖</p>
                <p className="text-xs text-ink-600">Actualizado: Febrero 2026</p>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
