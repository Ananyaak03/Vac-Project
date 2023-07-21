/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "grayish-cyan": "hsl(184, 14%, 56%)",
        "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        "dark-grayish-cyan": "hsl(186, 14%, 43%)",
      },
    },
    fontFamily: {
      SpaceMono: ["Space Mono", "sans-serif"],
    },
  },
  plugins: [],
};
