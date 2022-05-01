module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Merriweather Sans", "sans-serif"],
      body: ["Merriweather Sans", "sans-serif"],
      fontSize: {
        'heading': '36px',
        'content': '21px',
      }
    },
    extend: {
      colors: {
        'borderGradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.075) 52.08%, rgba(255, 255, 255, 0) 100%);',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}