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
        "main-purple": "#6a49f2",
        "darker-purple": "#583bd3",
      },
      boxShadow: {
        "main-purple": "0 0px 10px -4px #6b49f249",
        "light-purple": "0 0px 10px -4px #6b49f21f",
      },
    },
    screens: {
      base: "500px",
      md: "700px",
      lg: "800px",
      xl: "970px",
      "2xl": "1108px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
