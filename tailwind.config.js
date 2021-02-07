const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#33b5e5"
        },
        white: colors.white,
      }
    },
    fontFamily: {
      'sans': ['"ヒラギノ角ゴ ProN"', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
