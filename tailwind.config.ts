import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Naranja Galicia — color DOMINANTE de marca
        brand: {
          50:  '#fff4ec',
          100: '#ffe4cc',
          200: '#ffca99',
          300: '#ffa85c',
          400: '#ff7d1a',
          500: '#ff6600',   // naranja principal
          600: '#e55500',
          700: '#c24200',
          800: '#9a3500',
          900: '#7a2b00',
        },
        // Gris oscuro para textos y headers
        ink: {
          50:  '#f5f5f5',
          100: '#ebebeb',
          200: '#d6d6d6',
          300: '#b8b8b8',
          400: '#8f8f8f',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1f1f1f',
          900: '#111111',
        },
        // Fondo claro cálido para secciones alternadas
        sand: {
          50:  '#fdfaf6',
          100: '#f9f3ec',
          200: '#f0e6d4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':  '0 2px 12px 0 rgba(0,0,0,0.07)',
        'card-hover': '0 8px 24px 0 rgba(0,0,0,0.12)',
        'btn':   '0 4px 14px 0 rgba(255,102,0,0.35)',
      },
      borderRadius: {
        'pill': '999px',
        'card': '12px',
        'btn':  '8px',
      },
    },
  },
  plugins: [],
};
export default config;
