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
    extend: {
      colors: {
        primary: {
          '50': '#fff4ed',
          '100': '#ffe5d5',
          '200': '#fdc8ab',
          '300': '#fca175',
          '400': '#f9703e',
          '500': '#f74a18',
          '600': '#e8310e',
          '700': '#c0210e',
          '800': '#991c13',
          '900': '#7b1b13',
          '950': '#420908',
        },
      }
    },
  },
  plugins: [daisyUi],
};
