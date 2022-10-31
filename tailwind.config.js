/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'first': '#751172ff',
      'second': '#F8F8F8ff',
      'third': '#660266ff',
      'queen-pink': '#EAC8D5ff',
      'white': '#FAFAFAff',
    },
  },
  plugins: [require("daisyui")],
}
