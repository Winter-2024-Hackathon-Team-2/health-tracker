/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#393550',
        'turqoise': '#209FCD',
        'pale-yellow': '#F8EFA0',
        'off-white': '#FAFAFA',
        'almost-black': '#161626',
      },
    },
  },
  plugins: [require("daisyui")],
}

