/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: { 
        "pink": "#ff5771",
        "blue": "#3b50df",
        "dark": "#201e42", 
        "lightgray": "#616679",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      plugins: [],
    },
  },
};
