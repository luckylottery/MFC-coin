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
    },
    colors: {
      red: "#ec2028",
      blue: {
        "1": "#405cd0",
        "2": "#7280bc",
        "3": "#131f50",
        "4": "#e4e9ff"
      },
      yellow: "#f8ef24",
      white: "#fff",
      pink: "#ffe4e5"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
