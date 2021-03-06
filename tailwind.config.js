module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.md",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
