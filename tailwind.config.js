/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50:  '#EEF3FF',
          100: '#D6E1F5',
          200: '#AABFED',
          300: '#7D9CE5',
          400: '#6B8FE8',
          500: '#1E4FD8',
          600: '#2B5CE6',
          700: '#0F2E8A',
          800: '#0A2070',
          900: '#06134A',
        },
        ink:     '#0D1830',
        muted:   '#5A6B8A',
        'off-white': '#F7F9FF',
        charcoal: '#0D1830',
        cream:   '#F7F9FF',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}