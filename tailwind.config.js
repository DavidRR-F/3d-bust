/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-1": "#E0E7F6",
        "light-2": "#FFFFFF",
        "light-3": "#CCD7EA",
        "dark-1": "#2E2F32",
        "dark-2": "#16171A",
        "dark-3": "#4F545E",
      },
    },
  },
  plugins: [],
};
