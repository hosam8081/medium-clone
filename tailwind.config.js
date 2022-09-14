/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "main":"#fcc017"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}