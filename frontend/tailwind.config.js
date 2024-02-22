/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#393550',
        'turqoise': '#00AADE',
        'pale-yellow': '#F8EFA0',
        'off-white': '#FAFAFA',
        'almost-black': '#161626',
        'custom-navy': '#063372',
        'eggshell': '#E6F2FE',
        'green-blue': '#088A9B',
      },
    },
  },
  plugins: [require("daisyui")],
}

