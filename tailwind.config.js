module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'],
  // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        press_start: ['"Press Start 2P"', 'cursive'],
        minecraft: ['"Minecraft"', 'cursive'],
        comings: ['"Coming Soon"', 'cursive'],
      },
      keyframes: {
      },
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        fColors: {
          primary: '#ba7acf',
          secondary: '#f97bab',
          tertiary: '#ffccdf',
          quaternary: '#d0f1ff',
          quinary: '#97daf5',
          senary: '#60b0fb',
          septenary: '#3647b4',
        },
        gameboy: {
          primary: '#0f380f',
          secondary: '#306230',
          tertiary: '#8bac0f',
          quaternary: '#9bbc0f',
          quinary: '#306230',
          senary: '#0f380f',
          septenary: '#0f380f',
        },
        blueGameboy: {
          primary_blue: '#24364d',
          secondary_blue: '#98c1d9',
          tertiary_blue: '#e0fbfc',
          quaternary_blue: '#293241',
          primary_red: '#ee6c4d',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
