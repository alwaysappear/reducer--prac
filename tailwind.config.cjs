/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/.jsx'],
  theme: {
    extend: {
      colors: {
        'pry-clr-0': 'rgb(241, 245, 248)',
      },
      fontFamily: {
        cabin: ['Cabin', 'sans-serif']
      }
    },
  },
  plugins: [],
}