/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        molle: ['"Molle"', 'cursive'],
      },
    },
  },
  plugins: [],
}