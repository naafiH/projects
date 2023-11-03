
/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        bgcol1:"#131013",
        bgcol2 :"#0D192E",
        bgcol3 :"#F6F3E9"
      }
    },
    fontFamily:{
      font1:[ 'Roboto Slab', 'serif'],
      font2 :["Noto Sans JP","sans-serif"],
      font3: ['Dancing Script', 'cursive'],
      font4: ['Indie Flower', 'cursive'],
      font5: ['Cinzel', 'serif'],
      font6: ['Pixelify Sans', 'sans-serif'],
      

    }
  },
  plugins: [],
}
