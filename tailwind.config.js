/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Lobster: ['"Lobster"', "cursive"],
      Poppins: ['"Poppins"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#a90409",

        "dark-secondary": "#648813",
        secondary: "#d8be07",
        "light-secondary": "#ebd489",

        neutral: "#ede5cc",
      },
      animation: {
        bump: "bump 400ms ease-out",
      },
      keyframes: {
        bump: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9)",
          },
          "30%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(1.15)",
          },
        },
      },
    },
  },
  plugins: [],
};
