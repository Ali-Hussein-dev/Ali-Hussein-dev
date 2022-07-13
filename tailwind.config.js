module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      height: {
        vh95: '95vh',
        vh90: '90vh',
        vh87: '87vh',
        vh85: '85vh',
        vh80: '80vh',
      },
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
      },
    },
  },
  variants: {},
  plugins: [],
}
