module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'custom-804': '819px',
      },
      colors: {
        'custom-yellow': '#efbc46', // Vous pouvez nommer la couleur comme vous le souhaitez
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}