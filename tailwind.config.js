/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-gray': '#FBF9F5',
        'light-havan': '#F5EFE6',
        'havan': '#D4B38B',
        'havan-dark': '#C49A6C',
        'teal-brand': '#0D9488',
        'teal-light': '#14B8A6',
      },
      fontFamily: {
        frutiger: ['Tajawal', 'Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
