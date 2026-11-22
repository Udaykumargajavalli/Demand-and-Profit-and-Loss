/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07111f",
          900: "#0b1628",
          800: "#10213a"
        },
        cyan: {
          450: "#22b8cf"
        }
      },
      boxShadow: {
        soft: "0 10px 40px -18px rgba(15, 23, 42, 0.22)",
      },
    },
  },
  plugins: [],
};
