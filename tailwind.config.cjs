/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { 'max': '480px' },
      md: { 'max': '768px' },
      lg: { 'max': '976px' },
      xl: { 'max': '1440px' },
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans'],
      serif: ['Source Serif Pro', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
