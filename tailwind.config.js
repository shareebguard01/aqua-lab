/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neon-water palette (electric cyan)
        aqua: {
          50: '#e6fcff',
          100: '#b8f7ff',
          200: '#7df0ff',
          300: '#3fe9ff',
          400: '#00e5ff',
          500: '#00cfe6',
          600: '#00b8d4',
          700: '#0093ad',
          800: '#006d80',
          900: '#004857',
        },
        ink: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
          600: '#222222',
        },
        mist: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#c8c8c8',
          300: '#9a9a9a',
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
        soft: '0 10px 40px -10px rgba(0, 229, 255, 0.25)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.45)',
        glow: '0 0 18px rgba(0, 229, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.25)',
        neon: '0 0 10px rgba(0, 229, 255, 0.5)',
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
