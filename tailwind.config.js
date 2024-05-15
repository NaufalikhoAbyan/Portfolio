/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['noto sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#222832',
        'secondary': '#2F3847',
        'secondary-text': '#627491',
        'accent': '#E7A117',
        'linkedin': '#0077B5'
      }
    },
  },
  plugins: [],
}

