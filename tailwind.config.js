/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'violet-accent': '#7655dc',
        'skyblue-accent': '#589ad7',
        'skyblue-dark': '#3498db',
        'skyblue-light': '#dce9f6',
        greenish: '#78ad9f',
        teal: '#d5f0ee',
        yellowish: '#f5be67',
        pinkish: '#ffe2ed',
        blackish: '#101e50',
        grayish: '#f4f4f4',
        bluish: '#131e4d',
      },
      fontFamily: {
        manrope: ['manrope', 'sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
