/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: { max: '639px' },
        lg: { max: '1024px' },
        tablet: '640px',
        laptop: '1024px',
      },
      colors: {
        lightBlack: 'rgba(0, 0, 0, 0.5)',
        Clr94AFB6: '#94AFB6',
        Cyan: '#2DD3E3',
        LightBlue: ' #2DD3E3',
      },
    },
  },
};
