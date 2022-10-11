/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './contact.html'
  ],
  theme: {
    container: {
      padding: '7rem'
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
      },
      boxShadow: {
        'input': '0 5px 1px 0 rgba(0, 0, 0, 0.1)',
        'input-focus': '0 2px 1px 0 rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
