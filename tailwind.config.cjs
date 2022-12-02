/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/.jsx'],
  theme: {
    extend: {
      colors: {
        'pry-clr-0': 'rgb(241, 245, 248)',
        'pry-clr-1': 'rgb(30, 113, 221)',
        'pry-clr-2': 'rgb(30, 89, 189)',
        'pry-clr-3': 'rgb(16, 42, 66)',

      },
      fontFamily: {
        cabin: ['Cabin', 'sans-serif']
      }
    },
  },
  plugins: [],
}