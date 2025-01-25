/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
    screens: {
        'sm':'412px',
        'md':'768px',
        'lg':'892px',
      },
  },
  plugins: [],
}