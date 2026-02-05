/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0D0D0D',
          800: '#1A1A1A',
          700: '#262626',
        },
        secondary: '#F5F5F5',
        accent: {
          blue: '#0071E3',
          cyan: '#00B0FF',
          gold: '#FFB93A',
        },
        neutral: {
          100: '#EAEAEA',
          300: '#B0B0B0',
          500: '#333333',
        },
        error: '#FF3B30',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['3.5rem', { lineHeight: '1.2' }],
        'heading-2': ['2.5rem', { lineHeight: '1.25' }],
        'body': ['1.125rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}