/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core dark-purple palette (edit here to re-theme the whole site)
        ink: {
          950: '#0A0612', // page background, near-black purple
          900: '#120A1F', // section background
          800: '#1B1130', // card / surface background
          700: '#271A42', // borders, dividers
          600: '#392759', // hover surfaces
        },
        violet: {
          400: '#B48CF2', // soft accent / highlights
          500: '#9B5DE0', // secondary accent
          600: '#7C3AED', // primary brand purple
          700: '#5F27B8', // pressed / darker primary
        },
        glow: '#D8B4FE', // lavender glow used sparingly for signature accents
        mist: {
          100: '#F3EEFB', // primary text on dark
          300: '#C9BEDD', // body text
          500: '#8C7DA6', // muted / secondary text
          700: '#5A4E71', // faint text, placeholders
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.25), transparent 60%)',
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124, 58, 237, 0.45)',
        card: '0 8px 30px -12px rgba(10, 6, 18, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
