/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3333cc",
        red: "#e60000",
        primaryBG: "#f2f2f2",
        secondary: "#555",
      },
    },
  },
  plugins: [require("daisyui")],
};
