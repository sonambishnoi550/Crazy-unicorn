/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },

      fontFamily: {
        'sohne': "'Sohne Schmal', sans-serif",
      },
      fontSize: {
        'custom-xxs': '6px',
        'custom-sx': '13px',
        'custom-xs': '15px',
       
      },
      lineHeight: {
        'custom-md': '115%',
        'custom-2md': '121%',
        'custom-lg': '125%',
       
      },
      colors: {
        lightgreen: '#D2F038',
        green: '#097980',
        sky: '#00afb5',
        lightgray: '#9dc9cc',
        lightblack: '#a6a6a6',
        yellow: '#D2F038',
      },
      backgroundImage: {
        'bg': "url('/public/assets/images/png/body-image.png')",
        
      }
    },
  },
  plugins: [],
};
