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
      animation: {
        "click-it": "click .5s",
        "on-click": "animateClick .7s",
        "rotate-on": "rotateOn .7s",
        "rotate-off": "rotateOff .7s",
        "shake-on": "shakeOn .7s",
        "shake-off": "shakeOff .7s",
      },
      keyframes: {
        click: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        animateClick: {
          "0%": { left: "auto", right: "9%" },
          "50%": { width: "13vw" },
          "100%": { right: "auto", left: "9%" },
        },
        shakeOff: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(0.75, 1.25, 1)" },
          "40%": { transform: "scale3d(1.25, 0.75, 1)" },
          "50%": { transform: "scale3d(0.85, 1.15, 1)" },
          "65%": { transform: "scale3d(1.05, 0.95, 1)" },
          "75%": { transform: "scale3d(0.95, 1.05, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        shakeOn: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        rotateOff: {
          "50%": {
            transform: "rotate(180deg)",
          },
        },
        rotateOn: {
          "50%": {
            transform: "rotate(-180deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
