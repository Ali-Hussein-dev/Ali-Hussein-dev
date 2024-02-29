/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: { xs: { max: '639px' } },
      colors: {
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        theme: {
          primary: '#FCD269',
          secondary: '#e5dcb4',
          accent: '',
          neutral: '',
          success: '#4d7c0f',
        },
      },
      fontFamily: { sans: ['Nuntino', ...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [
    require('tailwindcss-highlights'),
    require('tailwind-custom-utilities'),
  ],
}
