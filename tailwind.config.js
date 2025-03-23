/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, 
      colors: {
        Primary: {
          400 : "rgb(72 162 104)", 
          500 : "#66CC8A"
        }
      }, 
      textColor: {
        Primary : "#66CC8A"
      }, 
      borderColor: {
        Primary : "#66CC8A"

      }
    },
  },

  plugins: [],
};