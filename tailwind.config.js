/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': {100:"#030A19",200:"#030C25",300:"#060D27"},
        'whiteGray':'#EAE8E8'

      },
    },
  },
  plugins: [],
}
