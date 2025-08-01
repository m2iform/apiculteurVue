/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#2D5E3E',
        'natural-white': '#FEFEFE',
        'soft-beige': '#F5EADF',
      },
    },
  },
  plugins: [],
}
