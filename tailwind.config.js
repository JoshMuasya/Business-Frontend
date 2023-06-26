/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'backblack': '#1E293B',
        'white': '#F1F5F9',
        'buttonback': '#290B36',
        'buttontext': '#6BA4D9',
        'thistle': '#D9D9D9',
        'errors': '#FF0000',
      },
      fontSize : {
        'xs': '12px',
        's': '20px',
        'm': '24px',
        'ml': '30px',
        'l': '40px',
        'xl': '50px',
      },
      fontFamily: {
        'kalam': 'Kalam, cursive',
        'quicksand': 'Quicksand, sans-serif',
      }
    },
  },
  plugins: [],
}
