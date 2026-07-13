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
        ink: {
          950: "#050712",
          900: "#090c16",
          850: "#0d1220",
          800: "#121827",
          700: "#1a2233"
        },
        signal: {
          blue: "#7fa7e6",
          cyan: "#86b7c9",
          violet: "#9f9ac7",
          mint: "#9fc8b4"
        }
      },
      boxShadow: {
        glow: "0 18px 42px rgba(0, 0, 0, 0.26)",
        card: "0 24px 64px rgba(0, 0, 0, 0.30)",
        panel: "0 16px 42px rgba(0, 0, 0, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;

