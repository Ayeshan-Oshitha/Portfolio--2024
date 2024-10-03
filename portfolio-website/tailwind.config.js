/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateBackAndForth: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },  // 180 degrees clockwise
          '100%': { transform: 'rotate(0deg)' }   // 180 degrees counterclockwise back
        },
      },
      animation: {
        'rotate-back-forth': 'rotateBackAndForth 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}



