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
        // Mobile (tamanho padrão sem media query, para dispositivos móveis)
        'mobile': {'max': '412px'}, // Aplica para telas até 768px (Mobile)

        // Desktop (para telas maiores que 768px)
        'desktop': {'min': '892px'}, // Aplica para telas acima de 768px (Desktop)
      },
  },
  plugins: [],
}
