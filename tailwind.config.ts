/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'custom-6': '0.375rem',
        'custom-10': '0.625rem',
      },
    },
    borderRadius: {
      none: '0',
    },

    zIndex: {
      '20': 20,
      '50': 50,
    },

    // all min-width queries by default
    screens: {
      sm: '640px',
      md: '768px',
      login: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
