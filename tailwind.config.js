/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': {100:"#030A19",200:"#030C25",300:"#030C24",400:"#05102C"},
        'whiteGray':'#EAE8E8',
        'aqua-blue':{100:'#08A7A3'}

      },
    },
  },
  plugins: [],
}
