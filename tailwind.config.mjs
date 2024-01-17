const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#a28d4f",
				"primary-700": "#705838",
			},
			fontFamily: {
				satoshi: ["Satoshi", ...defaultTheme.fontFamily.sans],
				kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
			  },
		},
	},
	plugins: [require('@tailwindcss/typography')]
}
