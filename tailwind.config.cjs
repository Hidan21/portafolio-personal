/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
      Paprika: 'Paprika',
      Inria: 'Inria Serif',
    },
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {
      colors: {
        dark_primary: '#131313',
        dark_secundary: '#2b2b2b',
        bg_light_primary: '#F5F9FD',
        gray: '#B7C5D3',
      },
      backgroundImage: {
        primaryLinear: 'linear-gradient(180deg, #86868b 0.48%, #080808 100%)',
      },
      dropShadow: {
        primary: '-5px 35px 40px rgba(223, 229, 236, 0.9)',
      },
    },
    boxShadow: {
      bPrimary: '-5px 35px 40px rgba(223, 229, 236, 0.9)',
    },
  },
  plugins: [],
};
