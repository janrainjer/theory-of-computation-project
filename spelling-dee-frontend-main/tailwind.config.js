module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD747',
      },
      backgroundImage: {
        'main-bg': "url('/public/main-bg.jpg')",
      },
      fontFamily: {
        Poppins: ['Poppins', 'cursive'],
      },
    },
  },
  plugins: [],
};
