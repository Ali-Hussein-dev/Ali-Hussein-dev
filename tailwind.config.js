module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
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
