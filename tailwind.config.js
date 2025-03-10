/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: "#ff3385", 
          green: "#00cc99",
        },
        secondary: {
          pink: "#ff0066",
          green: "#00b386",
        },
        texlight: "#a7a7a7",
        bgPrimary: "#020010",
      },
      fontFamily: {
        'raleway-bold': ['"Raleway"', 'sans-serif'],
      },
      fontWeight: {
        '700': 700,
      },
      fontOpticalSizing: {
        auto: 'auto',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.raleway-bold': {
          fontFamily: '"Raleway", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 500,
          fontStyle: 'normal',
        },
      });
    },
  ],
}

