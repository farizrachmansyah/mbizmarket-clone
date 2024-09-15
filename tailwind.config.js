/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: 'rgb(0, 174, 239)'
      }
    }
  },
  plugins: []
};
