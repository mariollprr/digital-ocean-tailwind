/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './contact.html'
  ],
  theme: {
    container: {
      padding: '2.5rem'
    },
    extend: {
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'cascadia': '"CascadiaCode"'
      },
      colors: {
        'do-blue-dark': 'rgb(8, 27, 75)',
        'do-blue-medium': 'rgb(0, 44, 155)',
        'do-blue-light': 'rgb(0, 105, 255)',
      }
    },
  },
  plugins: [],
}
