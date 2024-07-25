/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Grandstander"],
    },
    colors: {
      primary: "#11721D",
      secondary: "#F6F2EB",
      white: "#FFFFFF",
      black: "#2D2D2D",
    },
    extend: {
      backgroundImage: {
        review: "url('src/assets/review-background.svg')",
      },
    },
  },
  plugins: [],
};
