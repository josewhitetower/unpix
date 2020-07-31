const plugin = require('tailwindcss/plugin')
module.exports = {

  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.bg-back': {
          backgroundColor: 'rgba(0,0,0,0.3)'
        }
      }
      addUtilities(newUtilities, {
        variants: ['hover']
      })
    })
  ],
}
