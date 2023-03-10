/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'grey': '#E5E7EB;',
        'lavender': '#7E3AF2',
        'grey-dark': '#696969',
        'black': '#27272A',
        'hober-lavender': '#6C2BD9',
        'white': '#FCFBFA',
        'grey-light': '#E5E7EB',
        'red': '#E02424',
        'lavender-border': '#CABFFD'
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      width: {
        '1280': '1280px',
       },
       extend: {
        fontFamily: {
          'mont': "'Montserrat', 'serif'"
        }
       }

    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
