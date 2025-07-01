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
    },
  },
  plugins: [],
};
