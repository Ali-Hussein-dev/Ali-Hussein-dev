const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamilty: {
      body: 'oxanium cursive',
    },
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
        blueGray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {
      scale: ['responsive', 'hover', 'focus', 'active'],
      cursor: ['responsive', 'hover', 'disabled'],
    },
  },
  plugins: [],
}
