/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050b1a',
          900: '#0a1630',
          800: '#10224a',
          700: '#173061',
          600: '#1d3a73',
        },
        accent: {
          400: '#38c6dc',
          500: '#22b8cf',
          600: '#0e9bb3',
        },
        brand: '#2563eb',
        ink: '#1b2330',
        paper: '#f6f7f9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,22,48,0.04), 0 8px 24px -12px rgba(10,22,48,0.12)',
        lift: '0 2px 4px rgba(10,22,48,0.05), 0 18px 40px -16px rgba(10,22,48,0.22)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(14px,-10px,0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
