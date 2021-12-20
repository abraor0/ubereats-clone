const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html'
  ],
  theme: {
    extend: {

      colors: {
        'uber': '#05a357'
      },

      fontFamily: {
        sans: ['Readex Pro', 'Ubuntu', ...defaultTheme.fontFamily.sans]
      },

      screens: {
        overrides: '0px'
      }
    }
  },
  plugins: [],
}
