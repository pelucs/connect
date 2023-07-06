/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
        alt: "var(--font-bai-jamjuree)"
      },
      colors: {
        purple: {
          primary: "#9b59b6"
        },
        blue: {
          secundary: "#3498db"
        }
      }
    },
  },
  plugins: [],
}
