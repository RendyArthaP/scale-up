module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    textColor: {
      orange: "#F7A440",
      black: "#000000",
      white: "#FFFFFF",
      grey: "#636363",
    },
    backgroundColor: {
      blue: "#343F56",
      orange: "#F7A440",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
