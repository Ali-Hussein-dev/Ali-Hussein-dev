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
