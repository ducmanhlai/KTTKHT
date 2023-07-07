/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "green",
        light_green: "#b1ff00",
        dark_blue: "#00ffff",
        dark_orange: "#ff8c00",
      },
    },
  },
  plugins: [],
};
