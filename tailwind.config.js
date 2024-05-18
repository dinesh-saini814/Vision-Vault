/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0e1424",
      secondary: "#ECECEC",
      extra01: "#8a8fa3",
      extra02: "#adbbc6",
      extra03: "#FAE281",
      charcoal: "#212121",
      black: "#000000",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        WorkSans: ["Work Sans"],
        Nunito: ["Nunito Sans"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
