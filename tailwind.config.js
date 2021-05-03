const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    options: {
      safelist: [
        "hover:bg-danger",
        "hover:bg-primary",
        "hover:bg-accent",
        "text-danger",
        "text-primary",
        "text-accent",
        "border-danger",
        "border-primary",
        "border-accent",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#33b5e5",
        },
        accent: {
          DEFAULT: "#ffa144",
        },
        danger: {
          DEFAULT: "#e57373",
        },
        white: colors.white,
      },
      lineHeight: {
        0: "0",
      },
      transitionProperty: {
        accordion: "line-height opacity padding-top",
      },
    },
    fontFamily: {
      sans: ['"ヒラギノ角ゴ ProN"', '"Roboto"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
