import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: '#EFF1F3',
        black: '#1B1C22',
        navy: '#173B54',
        gold: '#E1C340',
        violet: '#210D41',
        red: '#DA2C38',
        pink: '#CA2E55'
      },
    },
  },
  plugins: [],
} satisfies Config;
