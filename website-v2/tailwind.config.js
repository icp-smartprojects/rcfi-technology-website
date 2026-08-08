/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A3D62',
          dark: '#072F4C',
          deeper: '#051E32',
          hover: '#0C4A77',
        },
        green: {
          DEFAULT: '#1E8E6E',
          light: '#3FB68E',
          hover: '#23A17D',
          mint: '#9FE0C8',
          soft: '#EDF9F4',
          border: '#BFE5D6',
        },
        ink: {
          DEFAULT: '#1B2B3A',
          muted: '#5A6B7A',
          soft: '#42566A',
          faint: '#8296A6',
          mist: '#9CB4C6',
          pale: '#C6D6E2',
        },
        line: '#E3E9EE',
        canvas: '#F6F8FA',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"Public Sans"', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1180px',
      },
      boxShadow: {
        hero: '0 24px 60px rgba(2,20,35,0.45)',
        float: '0 10px 30px rgba(2,20,35,0.35)',
        card: '0 12px 32px rgba(10,61,98,0.08)',
      },
    },
  },
  plugins: [],
}
