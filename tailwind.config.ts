import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens:{
      'xxs':{'max':'376px'},
      'xs':{'max':'480px'},
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [ require('tailwind-scrollbar'),
],
}
export default config
