/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "translate-blue": {
          title: "#0A1E46",
          select: "#C8E6FC",
        },
      },
    },
  },
  plugins: [],
}

