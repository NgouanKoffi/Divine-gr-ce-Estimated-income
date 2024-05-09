module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'custom-804': '804px',
        'max-md': '793px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}