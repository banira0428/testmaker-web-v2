const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#33b5e5"
        },
        accent: {
          DEFAULT: "#ffa144"
        },
        white: colors.white,
      },
      lineHeight: {
        '0': '0',
      },
      transitionProperty: {
        'accordion': 'line-height opacity padding-top',
      }
    },
    fontFamily: {
      'sans': ['"ヒラギノ角ゴ ProN"', '"Roboto"', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
