/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      oswald: "Oswald, sans-serif",
      urbanist: "Urbanist, sans-serif",
    },
    extend: {
      keyframes: {
        "item-floating": {
          "0%": { transform: "translateY(-0px)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "transform: translateY(-0px)" },
        },
      },
      animation: {
        "item-floating": "item-floating 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
