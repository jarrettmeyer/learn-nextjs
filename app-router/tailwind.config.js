/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
