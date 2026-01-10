
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        indigo: {
          600: '#4f46e5',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
