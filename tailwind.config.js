const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      gray: colors.trueGray,
    },
    boxShadow: {
      inner: 'inset 0 0 4px 1px #B91C1C',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
