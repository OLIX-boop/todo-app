/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background_black': "#181824",
        'elements_black' : "#25273C",
        'border': "#656675",
      },
    },
  },
  plugins: [],
}

