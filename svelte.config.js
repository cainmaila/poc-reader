import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.BASE_PATH ?? ''
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
