/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ornamentum: ["OrnamentumRegular", "sans-serif"],
        favorit: ["Favorit-Light", "sans-serif"],
        newEdge: ["NewEdge666-LightRoundedSlanted", "sans-serif"],
      },
    },
  },
  plugins: [],
};
