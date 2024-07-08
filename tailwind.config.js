/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', './build/script.js'],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '767px'},
      },
    },
  },
  plugins: [],
}

