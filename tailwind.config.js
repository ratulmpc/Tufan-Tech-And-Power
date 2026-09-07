/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',      // Slate 900
          navy: '#1e293b',      // Slate 800
          card: '#1e293b',
          accent: '#10b981',    // Emerald 500 (Energy Green)
          accentHover: '#059669',
          amber: '#f59e0b',     // Solar Sun Amber
          amberHover: '#d97706',
          sky: '#0284c7',       // Tech Blue
          skyLight: '#e0f2fe',
          grayBg: '#f8fafc',
          cardLight: '#ffffff',
          borderLight: '#e2e8f0',
          textDark: '#0f172a',
          textMuted: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Bengali', 'system-ui', 'sans-serif'],
        bengali: ['Noto Sans Bengali', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.08)'
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
