module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'#383e56': '#383e56',
				'redDanger': '#CD113B' /* prettier-ignore */,
				'greenDone': '#21BF73' /* prettier-ignore */,
			},
		},
	},
	variants: {
		extend: {
			borderWidth: ['focus', 'focus-within'],
			borderColor: ['focus', 'focus-within'],
		},
	},
	plugins: [],
};
