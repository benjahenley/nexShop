import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        bg: "background-color",
        text: "color",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FFFFFF",
        lightGray: "#F7F7F7",
        Gray: "#D4D4D4",
        mediumGray: "#B0B0B0",
        darkGray: "#333333",
        primary: "#FF6347",
        secondary: "#4B9CD3",
      },
      fontFamily: {
        sans: ["var(--font-general-sans)", "sans-serif"],
        clash: ["var(--font-clash-display)", "sans-serif"],
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      keyframes: {
        moveUpDisappear: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(-100%)", opacity: "0" },
          "51%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "move-up-disappear": "moveUpDisappear 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
