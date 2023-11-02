/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#a565d3',
          secondary: '#f4869a',
          accent: '#a048d6',
          neutral: '#1f2237',
          'base-100': '#413465',
          info: '#99c7e1',
          success: '#45d3bc',
          warning: '#d08816',
          error: '#ed7b73',
        },
      },
      {
        light: {
          primary: '#8f87ff',
          secondary: '#ffb5d1',
          accent: '#cdc2f9',
          neutral: '#151b28',
          'base-100': '#fcfcfd',
          info: '#4072ce',
          success: '#1fe073',
          warning: '#f08605',
          error: '#fb2e13',
        },
      },
    ],
  },
};
