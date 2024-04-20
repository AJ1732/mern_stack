/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#535BF2',
        'secondary': '#1AAC83',
        'cream': '#D8D8D8',
        'shade': '#333',
        'error': 'E7195A',
      },
      fontFamily: {
        "poppins": ["poppins", 'sans-serif'],
        "josefin": ["Josefin Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}

