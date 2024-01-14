/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        text: '#001908',
        dark: '#0a0a0a',
        accent: '#61BCE9',
        light:"#f2f2f2",
        secondary: '#1c1d1d',
        primary: '#3BEF80',
        white:"#f9f6ee"
      },
      fontFamily: {
        heading: 'Ubuntu',
        body: 'Ubuntu',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      
     
    },
  },
  plugins: [],
}