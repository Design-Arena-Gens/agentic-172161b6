import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2ff',
          100: '#fbe6fe',
          200: '#f5c9fe',
          300: '#eea5fd',
          400: '#e26dfc',
          500: '#d43bfb',
          600: '#9c2ac6',
          700: '#701f94',
          800: '#4b1566',
          900: '#2f0c40'
        },
        deep: '#0f0b1e',
        gold: '#f8c77c'
      },
      fontFamily: {
        heading: ['"Poppins"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at top, rgba(212,59,251,0.23), transparent 55%), radial-gradient(circle at bottom, rgba(118,70,255,0.12), transparent 45%)'
      }
    }
  },
  plugins: []
};

export default config;
