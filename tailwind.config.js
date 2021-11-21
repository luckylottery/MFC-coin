module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'formItem': '1fr 3fr',
      },
      gridTemplateRows: {
        'formContainer': 'auto 1fr'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
