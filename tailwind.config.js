/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Very-Dark-Magenta": "hsl(300, 43%, 22%)",
        "Soft-Pink": "hsl(333, 80%, 67%)",
        "Dark-Grayish-Magenta": "hsl(303, 10%, 53%)",
        "Light-Grayish-Magenta": "hsl(300, 24%, 96%)",
      },

      fontFamily: {
        "League-Spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
