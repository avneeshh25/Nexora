

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Example custom color
        secondary: "#9333EA",
      },
    },
  },
  plugins: [],
};
