/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFBF00', // Pixar Yellow
          dark: '#E6AC00',  // Darker Yellow
        },
        secondary: {
          light: '#FF6B6B', // Coral
          dark: '#FF4949',  // Darker Coral
        },
        accent: {
          light: '#4ECDC4', // Turquoise
          dark: '#45B7AE',  // Darker Turquoise
        },
        background: {
          light: '#FFFFFF',
          dark: '#2C3E50',  // Midnight Blue
        },
        text: {
          light: '#2C3E50', // Midnight Blue for light mode
          dark: '#F9FAFB',  // Light gray for dark mode
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}