/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xsm: {max: '425px'},
        sm: { max: '639px' },
        tablet2: { max: '768px' },
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
      backgroundImage: {
        'pink-card': "url('/public/Group 167.svg')",
        'blue-card': "url('/public/Group 168.svg')",
        'yellow-card': "url('/public/Group 169.svg')",
      },
    },
  },
};
