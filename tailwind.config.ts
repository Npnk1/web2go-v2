import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./i18n/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f5f3ec",
        canvas: "#fbfaf7",
        ink: {
          950: "#091126",
          900: "#0b1736",
          800: "#162342",
          700: "#273755",
          600: "#516078"
        },
        cobalt: {
          50: "#eef3ff",
          100: "#dfe8ff",
          200: "#bfd0ff",
          500: "#2457f5",
          600: "#1948dc",
          700: "#1439b7"
        },
        acid: "#b8e64a"
      },
      boxShadow: {
        lift: "0 24px 70px rgba(9, 17, 38, 0.12)",
        card: "0 12px 34px rgba(9, 17, 38, 0.08)",
        crisp: "0 1px 0 rgba(9, 17, 38, 0.08)"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;

