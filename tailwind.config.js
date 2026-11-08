/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elderberry: {
          50: '#F9F3F6',
          100: '#F2E4EC',
          200: '#E4C9D9',
          300: '#D1A3C0',
          400: '#B5749D',
          500: '#8A3F70',
          600: '#6E2E57',
          700: '#521D3F',
          800: '#3D132D',
          900: '#260B1C',
          950: '#160510',
        },
        brandCherry: {
          light: '#FCECEF',
          DEFAULT: '#9E1C38',
          dark: '#731126',
        },
        brandCinnamon: {
          light: '#FDF1EB',
          DEFAULT: '#B04C28',
          dark: '#853216',
        },
        brandGinger: {
          light: '#FDF5E6',
          DEFAULT: '#C67E28',
          dark: '#935814',
        },
        brandHoney: {
          light: '#FFF9ED',
          DEFAULT: '#DDA137',
          dark: '#B07B1D',
        },
        brandSage: {
          light: '#F0F5F2',
          DEFAULT: '#3B594B',
          dark: '#263B31',
        },
        cream: {
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F3EDE3',
          300: '#E8DFCFAF',
          400: '#D5C7B2',
        }
      },
      fontFamily: {
        serif: ['"Helvetica Neue"', 'Helvetica', 'Arial', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Helvetica Neue"', 'Helvetica', 'Arial', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Helvetica Neue"', 'Helvetica', 'Arial', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'glow-berry': '0 0 50px -10px rgba(110, 46, 87, 0.35)',
        'glow-gold': '0 0 50px -10px rgba(221, 161, 55, 0.35)',
        'soft-float': '0 20px 40px -15px rgba(22, 5, 16, 0.08)',
        'elevated': '0 25px 60px -15px rgba(22, 5, 16, 0.15)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}

