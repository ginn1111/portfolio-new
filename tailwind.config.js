/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        xs: "360px",
      },
      gridTemplateColumns: {
        "auto-fill-350": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      colors: {
        background: "#111927",
        text: {
          DEFAULT: "#a4b1cd",
          primary: "#9fef03",
        },
        primary: "#56f3a2",
      },
      fontFamily: {
        sans: ["Exo", "sans-serif"],
        script: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
