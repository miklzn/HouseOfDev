/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF3F3F",
        primaryHover: "#DC2B2B",
      },
      boxShadow: {
        dropdown: "0px 2px 5px rgba(0, 0, 0, 0.12)",
        nav: "0px 2px 5px rgba(0, 0, 0, 0.08)",
        button: "0 4px 10px 0 rgba(20, 20, 43, 0.04)",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
};
