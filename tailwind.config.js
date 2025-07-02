// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter Tight"', "sans-serif"],
        megrim: ['"Megrim"', "cursive"],
        caveat: ['"Caveat"', "cursive"],
        fredoka: ['"Fredoka"', "sans-serif"],
        knewave: ['"Knewave"', "cursive"],
        cinzel: ['"Cinzel Decorative"'],
      },
      keyframes: {
        borderDraw: {
          "0%": { clipPath: "inset(100% 100% 100% 100%)" },
          "25%": { clipPath: "inset(0% 100% 100% 100%)" },
          "50%": { clipPath: "inset(0% 0% 100% 100%)" },
          "75%": { clipPath: "inset(0% 0% 0% 100%)" },
          "100%": { clipPath: "inset(0% 0% 0% 0%)" },
        },
      },
      animation: {
        "border-draw": "borderDraw 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
