module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: theme('opacity.0') },
          '100%': { opacity: theme('opacity.100') },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
