/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        29: "7.5rem",
        100: "30rem",
        "6/10": "60%",
      },
    },
  },
  plugins: [],
};
