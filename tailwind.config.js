/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: "library-regular",
        bold: "library-medium",
      },
      backgroundImage: {
        formBg: "url('')",
      },
      colors: {
        offwhite: "#f8f8f8",
        formGrey: "#282828",
        formBlack: "#111111",
        libraryOrange: "#F65867",
        gray: "#f9f9f9",
      },
      screens: {
        'sm': "640px",
        'md': "768px",
        'lg': "1024px",
        'xl': "1280px",
        "2xl": "1660px",
      },
    },
  },

  plugins: [],
};
