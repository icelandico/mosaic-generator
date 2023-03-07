const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		{
			pattern: /grid-cols-./,
		},
		{
			pattern: /grid-rows-./,
		},
		{
			pattern: /rounded-./,
		}
	],
	theme: {
		extend: {
			colors: {},
		}
	},

	plugins: []
};

module.exports = config;
