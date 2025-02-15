import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#30443a",
        secondary: "#a15865",
        accent: "#bd8590",
        highlight: "#e9b8a4",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        radley: ["var(--font-radley)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
