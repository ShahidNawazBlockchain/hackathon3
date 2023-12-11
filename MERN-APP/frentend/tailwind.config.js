/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-custom":
          "linear-gradient(to right, #FFFFFF 40%, #EEEDED 40%, #EEEDED 20%)",
      },
    },
  },
  plugins: [],
};
