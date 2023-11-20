const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'ac-dark': '#252525',
        'ac-dark-2': '#333333',
        'ac-light': '#f5f5f5',
        'ac-light-2': '#dddddd',
        'ac-darkblue': '#164159',
        'ac-lightblue': '#009ad2'
      },
      fontFamily: {
        display: ['Display', ...defaultTheme.fontFamily.sans],
        body: ['Body', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        xs: '475px'
      }
    },
	},
	plugins: [],
}
