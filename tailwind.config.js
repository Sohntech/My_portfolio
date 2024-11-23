/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgb(0 255 255), 0 0 10px rgb(0 255 255), 0 0 15px rgb(0 255 255)' },
          '100%': { 'box-shadow': '0 0 20px rgb(0 255 255), 0 0 30px rgb(0 255 255), 0 0 40px rgb(0 255 255)' },
        },
      },
    },
  },
  plugins: [],
};