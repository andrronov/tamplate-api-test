/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        dev: {
          '100': '#d2fefa',
          '500': '#010109'
        },
        txt: {
          '100': '#555555',
          '200': '#333333'
        }
      },
    },
    fontFamily: {
      kyiv: ['KyivType Serif', 'Serif']
    }, 
    screens: {
        xs: "641px",
        sm: "1024px",
        xl: "1280px"
    },
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js}']
}