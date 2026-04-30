import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['var(--font-jakarta)'],
        sans:    ['var(--font-dm-sans)'],
        mono:    ['var(--font-dm-mono)'],
      },
      colors: {
        navy: {
          900: '#070d18', 800: '#0a1221', 700: '#0f1a2e',
          600: '#152338', 500: '#1c2f47',
        },
        teal: {
          DEFAULT: '#1D9E75',
          hover:   '#22b589',
          dim:     'rgba(29,158,117,0.10)',
          text:    '#4ecba5',
        },
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(29,158,117,0.13), transparent 70%)',
      },
    },
  },
  plugins: [],
}
export default config
