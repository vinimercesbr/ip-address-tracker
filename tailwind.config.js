/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'], // Custom font
      },
    },
    screens: {
      // 'mobile' with max-width for smaller screens
     'mobile': '375px',
      // 'desktop' with min-width for larger screens
      'desktop': '1440px', // Keep if needed, or adjust for larger devices
    },
  },
  plugins: [],
}
