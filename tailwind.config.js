module.exports = {
  mode: "jit",
  purge: [
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        categories: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
