/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'dmsans': ['"DM Sans"', 'sans']
    },
    extend: {
      colors: {
        'pinkish': '#D93F48',
        'pinkish-light': '#FF757D'
      },
    },
  },
  plugins: [],
}

