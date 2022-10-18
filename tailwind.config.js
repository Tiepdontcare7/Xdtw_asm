/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'main-shadow': '0px 10px 20px rgba(164, 217, 253, 0.15)',
        'po-shadow': '0px 4px 8px rgba(0, 0, 0, 0.1)',
        
      }
    },
    // screens: {
    //   'mb': '300px',
    // },
  },
  plugins: [],
}
