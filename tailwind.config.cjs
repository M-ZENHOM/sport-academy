/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000",
      pur: {
        300: "#541554bf",
        900: "#541554",
      },
      beg: {
        900: "#f4ede4",
      },
      myOrange: {
        900: "#ecb22e",
      },
    },
    container: {
      padding: "2rem",
    },
    extend: {
      height: {
        128: "32rem",
        140: "40rem",
        150: "50rem",
      },
      width: {
        150: "1200px",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1345px" },
      lg: { max: "1023px" },
      md: { max: "991px" },
      sm: { max: "639px" },
    },
    backgroundImage: {
      swimBg: "url(./assets/swimBg.jpg)",
      IntroImg: "url(./assets/sportImg.jpg)",
    },
  },
  plugins: [],
};
