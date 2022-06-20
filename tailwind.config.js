/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#faf0d7',
        'blue-color': '#8cc0de',
        'orange-color': '#ffd9c0',
        'char-color': '#f4bfbf',
        'dark-color': '#2f2e41',
      },
      boxShadow: {
        'standard': '5px 5px rgba(0, 0, 0, 1)',
        'standard-hover': '7px 7px rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        russo: ['Russo One'],
      }
    }
  },
  plugins: [],
}
