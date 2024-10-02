/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "brand-blue" : "#0086ff",
        "brand-dark-blue" : "#13324f"
      }
    },
  },
  plugins: [],
}

