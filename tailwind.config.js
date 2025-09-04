// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
    },
    //  screens: {
    //   'xs': '380px',
    // },
  },
  plugins: [],
}
