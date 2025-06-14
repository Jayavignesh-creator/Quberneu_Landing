/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1922fb',
          50: '#f0f1ff',
          100: '#e1e4ff',
          500: '#1922fb',
          600: '#1419e6',
        },
        secondary: {
          DEFAULT: '#948f8a',
          100: '#f8f7f6',
          500: '#948f8a',
        },
        accent: {
          DEFAULT: '#eeede9',
          100: '#eeede9',
          200: '#e3e0da',
        },
        dark: {
          DEFAULT: '#2b2b2e',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'FedraSansStd', 'sans-serif'],
        'tomato': ['TomatoGrotesk-Medium', 'Inter', 'sans-serif'],
        'fedra': ['FedraSansStd', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(32px, 4.166vw, 60px)',
        'section': 'clamp(28px, 3.472vw, 50px)',
        'subsection': 'clamp(24px, 2.777vw, 40px)',
        'hero-sub': 'clamp(18px, 1.5vw, 24px)',
      },
      maxWidth: {
        'container': '1264px',
      },
      spacing: {
        'section': 'calc(60px + 5vh)',
      },
      backdropBlur: {
        'header': '20px',
      },
      boxShadow: {
        'card': '0 3px 30px rgba(43, 43, 46, 0.1)',
      },
    },
  },
  plugins: [],
}