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
      },
      colors: {
        'yellow-primary': '#f8ef24',
        'red-primary': '#ec2028',
        'blue-primary': '#405cd0',
        'blue-secondary': '#7280bc',
        'red-secondary': '#ffe4e5',
        'blue-light': '#e4e9ff',
      },
      borderRadius: {
        'coin-form': '40px',
        'coin-form-border': '42px'
      },
      boxShadow: {
        'coin-form-shadow': '3px 2px 5px 1px #E5E7EB;'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
