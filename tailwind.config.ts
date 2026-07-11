import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050713",
          900: "#080b18",
          850: "#0b1020",
          800: "#101728",
          700: "#172036"
        },
        signal: {
          blue: "#4f8cff",
          cyan: "#20d8d2",
          violet: "#8f6cff",
          mint: "#64f0b9"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(32, 216, 210, 0.16)",
        card: "0 22px 60px rgba(0, 0, 0, 0.32)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "20%, 80%": { opacity: "0.35" },
          "100%": { transform: "translateY(100%)", opacity: "0" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 12s ease infinite",
        scan: "scan 5.5s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

