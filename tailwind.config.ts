import type { Config } from "tailwindcss";
// import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1100px',
      '2xl': '1220px',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontFamily: {
      sans: 'var(--open-sans)',
      cinzel: 'var(--cinzel)',
      'cinzel-dec': 'var(--cinzel-dec)',
    },
    extend: {
      colors: {
        white: '#EFF1F3',
        black: '#1B1C22',
        navy: '#173B54',
        gold: '#E1C340',
        violet: '#210D41',
        red: '#DA2C38',
        pink: '#CA2E55',
        gray: '#D9D9D9',
        darkGray: '#9D9D9D'
      },
    },
  },
  plugins: [],
} satisfies Config;
