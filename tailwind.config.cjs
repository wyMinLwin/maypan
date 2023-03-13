/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:'#C7D8C6',
        secondary:'#ff5035',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
