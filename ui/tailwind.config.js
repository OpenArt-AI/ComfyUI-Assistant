/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "comfy-light":"#353535",
        "comfy-dark":"#222222",
      }
    },
  },
  plugins: [],
  corePlugins:{
    preflight:false
  }
}

