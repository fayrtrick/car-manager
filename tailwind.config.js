/** @type {import('tailwindcss').Config} */
import daisyUi from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F9703E",
          "primary-content": "#ffffff",
          secondary: "#FFD0B5",
          accent: "#98AEEB",
          neutral: "#323F4B",
          "base-100": "#F2F5F9",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [daisyUi],
};
