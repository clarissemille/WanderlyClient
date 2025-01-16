/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "url('assets/images/background.jpg')",
      },
      colors: {
        customTeal: "#24ACA4",
        error: "#FC4444"
      },
      animation: {
        'scroll-right': 'scrollRight 1s ease-in-out',
        'fade-in': 'fadeIn 2s ease-in-out forwards',
      },
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

