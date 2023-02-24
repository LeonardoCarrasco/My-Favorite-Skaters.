/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-bg-color': '#EEFF88',
        'green-bg-color': '#94FF92',
        'blue-bg-color': '#A2D8FF',
        'pink-bg-color': '#FFB7D1',
        'main-bg-color': '#FF9797',
      },
    },
  },
  plugins: [],
}
