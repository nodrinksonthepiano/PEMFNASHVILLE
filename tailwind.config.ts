import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#3D1A28',
          dark: '#2A1019',
          light: '#5C2A3F',
        },
        gold: {
          DEFAULT: '#C9A047',
          light: '#E0BC6E',
          dark: '#A07C30',
        },
        mauve: {
          DEFAULT: '#A07080',
          light: '#C4A0AF',
          dark: '#7A5060',
        },
        cream: {
          DEFAULT: '#F5EDE0',
          dark: '#E8D9C8',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-dancing)', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
