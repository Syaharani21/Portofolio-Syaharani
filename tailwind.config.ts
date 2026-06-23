import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
      },
      colors: {
        violet: "#7c6ff7",
        "violet-dark": "#5a54d4",
        lime: "#c8f060",
        "lime-dark": "#a8d040",
        pink: "#f070b0",
        amber: "#f0a030",
        bg: "#07080f",
        bg2: "#0d0f1c",
        bg3: "#12152a",
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
        "fade-up": "fade-up 0.55s ease forwards",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
