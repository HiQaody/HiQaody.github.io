/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        primary: '#0D0F34',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'tight': '1.25',
        'normal': '1.5',
        'loose': '1.75',
        'extra-loose': '2',
      },
    },
  },
  plugins: [],
}