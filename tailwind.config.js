/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
        fontFamily: {
          'regular': ['Josefin Sans', 'sans-serif']
        },
        backgroundImage: {
          'hero': "url(./images/bg-pattern-desktop.svg)"
        }
    },
  },
  plugins: [],
}
