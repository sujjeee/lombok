/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kessel': ['Kessel', 'sans-serif'],
        'faber': ['Faber', 'sans-serif'],
        'content': ['Content']
      }
    },
  },
  plugins: [],
}
