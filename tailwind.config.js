/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  mode: "jit",
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Headings: ["Barlow Condensed", "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },

      letterSpacing: {
        1: "0em",
        2: "0.025em",
        3: "0.05em",
        4: "1em",
      },

      screens: {
        ipad: "810px",
      },
    },
  },
  plugins: [],
};
