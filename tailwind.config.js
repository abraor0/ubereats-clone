const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html'
  ],
  theme: {
    extend: {
      boxShadow:{
        'card-normal': '0 0 0 1px rgba(0, 0, 0, 0.125)',
        'card-hover': '0 0 0 1px rgba(0, 0, 0, 1)' 
      },
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
