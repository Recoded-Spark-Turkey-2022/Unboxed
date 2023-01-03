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
        md: { max: '940px' },
        425: { max: '425px' },
      },
    },
  },
  plugins: [],
};
