/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'menu-slide': 'menu-slide 500ms ease-in-out',
        
      },

      keyframes:{
        'menu-slide': {
          '0%': {
            right: '-100%',
          },
          '100%': {
            right: '0%',
          }
      }
    },
  
    },
  },
  plugins: [],
}
