/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'trading': {
          dark: '#121212',
          panel: '#1a1a1a',
          border: '#333333',
          green: '#4CAF50',
          red: '#f44336',
        }
      }
    },
  },
  plugins: [],
}
