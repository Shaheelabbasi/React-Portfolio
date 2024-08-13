/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin: "#fefafa", // Corrected key and value
      },
      textColor:{
        barcolor:"#ec5b53",
        introcolor:"#002d5b"
      }
    },
  },
  plugins: [],
}
