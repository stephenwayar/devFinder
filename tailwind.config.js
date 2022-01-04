module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'ip6': '375px',
        'ip6p': '414px',
        'mbp': '1440px',
      }
    },
  },
  plugins: [],
}
