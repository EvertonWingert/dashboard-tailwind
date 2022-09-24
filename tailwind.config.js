const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
