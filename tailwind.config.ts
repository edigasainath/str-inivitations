import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        surface: 'var(--surface)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        envelope: 'var(--envelope)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Great Vibes', 'cursive'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'hover': '0 12px 36px rgba(0, 0, 0, 0.12)',
        '2xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'xs': '0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      backdropBlur: {
        'xs': '4px',
      }
    },
  },
  plugins: [],
}
export default config
