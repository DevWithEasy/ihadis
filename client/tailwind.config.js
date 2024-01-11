/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bangla': ['Noto Serif Bengali', 'serif'],
        'arabic': ['Lateef', 'serif']
      }
    }
  },
  plugins: [],
}