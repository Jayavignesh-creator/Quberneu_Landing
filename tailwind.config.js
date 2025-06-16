/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f0242c',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#f0242c',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        secondary: {
          DEFAULT: '#fbfcfa',
          50: '#fbfcfa',
          100: '#f7f8f6',
          200: '#eff1ed',
          300: '#e6e9e3',
          400: '#d4d8d0',
          500: '#bbc1b6',
          600: '#9ba19a',
          700: '#7d837c',
          800: '#656a64',
          900: '#535853',
        },
        neutral: {
          dark: '#2b2b2e',
          medium: '#948f8a',
          light: '#eeede9',
        }
      },
      fontFamily: {
        'tomato': ['TomatoGrotesk-Medium', 'Inter', 'sans-serif'],
        'fedra': ['FedraSansStd', 'Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(32px, 4.166vw, 60px)',
        'h2': 'clamp(28px, 3.472vw, 50px)',
        'h3': 'clamp(24px, 2.777vw, 40px)',
        'section-title': 'clamp(32px, 3.333vw, 48px)',
        'hero-title': 'clamp(60px, 2vw, 80px)',
        'hero-subtitle': 'clamp(18px, 1.5vw, 24px)',
        'card-title': 'clamp(22px, 2.269vw, 31px)',
      },
      maxWidth: {
        'container': '1264px',
      },
      backdropBlur: {
        '20': '20px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}