module.exports = {
  content: ['./css-src/**/*.css'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      md: '48rem',
      lg: '64rem',
    },
    extend: {
      colors: {
        purple: '#4b2e83',
        'purple-dark': '#37205f',
        'purple-light': '#f3effa',
        grey: '#f4f4f6',
      },
      fontFamily: {
        primary: ['"Public Sans"', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      transitionDuration: {
        150: '150ms',
      },
    },
  },
  plugins: [],
};
