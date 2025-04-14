/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0c0a33',
        violetCore: '#7b2cbf',
        roseAccent: '#fb7185',
        plumGlow: '#a855f7',
        pearlWhite: '#ffffff',
        zincMist: '#d4d4d8',
        glassLilac: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
