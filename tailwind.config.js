const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.html', './src/**/*.vue'],
  },
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'},
        },
      },
      animation: {
        'zoom-in': 'zoomIn 0.3s ease-in-out',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({addUtilities}) => {
      const newUtilities = {
        '.bg-back': {
          backgroundColor: 'rgba(0,0,0,0.3)',
        },
        '.blur': {
          filter: 'blur(4px)',
        },
      };
      addUtilities(newUtilities, {
        variants: ['hover'],
      });
    }),
  ],
};
