/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Vérifiez que ce chemin est correct
  ],
  theme: {
    extend: {
      colors: {
        blue: '#FEB95F',    // Couleur primaire (exemple)
        bluee: '#7D8491',  // Couleur secondaire (exemple)
      },
    },
  },
  plugins: [],
}
