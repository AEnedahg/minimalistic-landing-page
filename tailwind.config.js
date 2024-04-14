/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html',
  '*.js'],
  theme: {
    width: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1400px',
      '5xl': '1536px',
    },
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '475px',
      'lg': '640px',
      'xl': '768px',
      '2xl': '1024px',
      '3xl': '1280px',
      '4xl': '1400px',
      '5xl': '1536px',
    },
    extend: {
      colors: {
        'brandPrimary-700': '#285E67',
        'brandSecondary-400': '#FCE2D7',
        'neutral-0': '#FFFFFF',
        'neutral-200': '#F4F4F4',
        'neutral-700': '#2C2C2C',
        'neutral-800': "#2B2B2B",
        'neutral-900': '#2A2A2A',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

