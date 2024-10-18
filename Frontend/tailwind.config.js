/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#f6f4ff",
        },
        og: "#FF8E5C",
        "purple-text": "#3e3f66",
        "dark-purple": "#32236f",
      },
    },
  },
  plugins: [],
};
