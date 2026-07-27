/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neon-White & Obsidian Black palette
        aqua: {
          50: '#ffffff',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#ffffff', // Primary neon white
          500: '#a1a1aa',
          600: '#71717a',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        ink: {
          950: '#050505', // Ultra deep obsidian
          900: '#0a0a0c', // Deep obsidian black
          800: '#121215', // Dark obsidian card background
          700: '#18181b', // Obsidian card highlight
          600: '#27272a', // Obsidian border
        },
        mist: {
          50: '#ffffff',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#a1a1aa',
        },
      },
      fontFamily: {
        display: ['Anton', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(255, 255, 255, 0.25)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.65)',
        glow: '0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.15)',
        neon: '0 0 15px rgba(255, 255, 255, 0.6)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px,15px) scale(0.95)' },
        },
        waveMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        waveMove: 'waveMove 20s linear infinite',
        riseIn: 'riseIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
};
