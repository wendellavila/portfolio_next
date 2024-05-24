import type { Config } from 'tailwindcss';

// Adding default tailwind colors
const colors = require('tailwindcss/colors');
// Removing deprecated color names
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  theme: {
    extend: {
      colors: {
        blueprint: '#6D9DC5',
        cream: '#FFDED5',
        latte: '#9A7F78',
        coffee: '#755d57',
        silver: '#96AECD',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
  corePlugins: {
    preflight: true,
  },
  mode: 'jit',
  safelist: [
    'bg-cream',
    'bg-blueprint',
    'text-coffee',
    'text-slate-100',
    'text-slate-500',
    {
      pattern: /(bg|border|text|decoration)-(latte|silver|sky-100|white|black)/,
      variants: ['hover', 'group-hover'],
    },
  ],
};
export default config;
