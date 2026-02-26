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
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
                <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2"/>
                    <line x1="8" y1="7" x2="16" y2="7"/>
                    <line x1="8" y1="11" x2="16" y2="11"/>
                    <line x1="8" y1="15" x2="12" y2="15"/>
                  </svg>
                </div>
                <span className="font-black text-ink-900 text-base tracking-tight leading-none">
                  Calculadora<br/>
                  <span className="text-brand-500 font-bold text-xs">Indemnización</span>
                </span>
              </a>

              {/* Nav */}
              <div className="flex items-center gap-1">
                <a href="/calculadora-indemnizacion" className="text-sm text-ink-600 hover:text-ink-900 font-semibold px-3 py-2 rounded-md hover:bg-ink-50 transition-all">
                  Calculadora
                </a>
                <a href="/guias/indemnizacion-despido" className="text-sm text-ink-600 hover:text-ink-900 font-semibold px-3 py-2 rounded-md hover:bg-ink-50 transition-all hidden sm:block">
                  Guías
                </a>
                <a href="/faq" className="text-sm text-ink-600 hover:text-ink-900 font-semibold px-3 py-2 rounded-md hover:bg-ink-50 transition-all">
                  FAQ
                </a>
                <a
                  href="/calculadora-indemnizacion"
                  className="ml-3 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold px-5 py-2.5 rounded-btn transition-colors shadow-btn hidden sm:block"
                >
                  Calcular gratis
                </a>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          {/* ── FOOTER ── */}
          <footer className="bg-ink-900 text-ink-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-10 border-b border-white/10">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2"/>
                        <line x1="8" y1="7" x2="16" y2="7"/>
                        <line x1="8" y1="11" x2="16" y2="11"/>
                        <line x1="8" y1="15" x2="12" y2="15"/>
                      </svg>
                    </div>
                    <span className="font-black text-white text-base">Calculadora Indemnización</span>
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
              <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-2">
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
