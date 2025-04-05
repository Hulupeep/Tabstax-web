module.exports = {
  content: [
    "./content/**/*.md",
    "./_includes/**/*.html",
    "./*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
