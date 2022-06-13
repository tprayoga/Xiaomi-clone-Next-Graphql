/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "rgb(29, 28, 28)",
        "primary-light": "rgb(180, 180, 180)",
        "primary-light-2": "#EEEEEE",
      },
    },
  },
  plugins: [],
};
