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
          "2xl": "1328px"
        },
      },

      fontFamily: {
        'pinky': "'pinky-unicorn', sans-serif",
      },
      fontSize: {
        'custom-xl': '22px',
        'custom-2xl': '25px',
        'custom-3xl': '35px',
        'custom-4xl': '40px',
        'custom-8xl': '70px',


      },
      lineHeight: {
        'custom-xl': '147%',
        'custom-2xl': '150%',
        'custom-3xl': '174%',

      },
      colors: {
        "skyblue": '#24FAFF',
        "peach": '#FF94B0',
        "darkpeach": '#B56980',
        "orange": '#FF8327',
        "darkorange": '#B55F32',
        "yellow": '#FFE527',
        "dustyyellow": '#B59732',
        "lightgreen": '#70FF3B',
        "dustygreen": '#64A63E',
        "neonblue": '#5A6EFF',
        "dustyneonblue": '#5753AD',
        "brightpink": '#FF488A',
        "darkpink": '#B53E6B',
        "darkblue": '#080952',
        "dustygreen": '#39A3AD',
        "pink": '#EA88FB',
        "offwhite": '#F9F4FD'
      },
      backgroundImage: {
        'bg': "url('/public/assets/images/png/body-image.png')",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(100.7deg, #B62AFF -82.68%, #FF0DF2 143.2%)',
      },

    },
  },
  plugins: [],
};
