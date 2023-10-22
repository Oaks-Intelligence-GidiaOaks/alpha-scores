/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#1a384c",
        secondary: "#ff4a17",
        color1: "#193548",
        dark: "#14212b",
        grey: "#687693",
      },
      screens: {
        lg: "1024px",
        xl: "924px",
        "2xl": "1124px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        pt: ["PT Serif", "serif"],
      },
    },
  },
  plugins: [],
};
