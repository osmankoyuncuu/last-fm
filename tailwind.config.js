/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        beethowern: "url('./assets/beethoven.webp')",
        mozart: "url('./assets/mozart.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
