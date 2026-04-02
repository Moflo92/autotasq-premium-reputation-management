/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette tirée des vidéos — tons chauds ambre/terracotta/charbon
        'warm': {
          50:  '#FAF7F3',   // fond principal crème chaud
          100: '#F3EBE1',   // fond sections alternées
          200: '#E8D9CA',   // bordures
          300: '#D4B89A',   // bordures prononcées
          400: '#B8896A',   // texte léger
          500: '#9A6B4E',   // texte secondaire
          600: '#7C5438',   // texte tertiaire
          700: '#5E3D24',   // texte medium
          800: '#3F2610',   // texte sombre
          900: '#2C1F17',   // texte principal / CTA
        },
        'amber': {
          DEFAULT: '#C2884A',  // accent principal
          light:   '#FAF0E4',  // fond accent léger
          warm:    '#D4956A',  // accent secondaire
          dark:    '#A0522D',  // accent foncé
        },
      },
      fontFamily: {
        sans:  ["Outfit", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
        mono:  ["Space Mono", "monospace"],
      },
      boxShadow: {
        'card':       '0 4px 24px 0 rgba(44,31,23,0.07)',
        'card-hover': '0 12px 40px 0 rgba(44,31,23,0.13)',
      },
    },
  },
  plugins: [],
}
