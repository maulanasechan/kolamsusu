/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'poppins', sans-serif",
      },
      animation: {
        fadeIn: "fadeIn 5s ",
        fadeRight: "fadeRight 5s ",
        tittle: "tittle 5s ",
        tittleText: "tittle 5s ",
        sliderImg: "sliderImg 0.5s ",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            transform: "translate(-100px, 100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: "1",
          },
        },
        fadeRight: {
          "0%": {
            transform: "translate(100px, 100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: "1",
          },
        },
        tittle: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        tittleText: {
          "0%": {
            transform: "translate(0px, 100px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
        sliderImg: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
