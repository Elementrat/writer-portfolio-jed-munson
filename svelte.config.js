import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		paths: {
			base: dev ? '' : '/jed-munson-portfolio',
		},
		adapter: adapter({
			// default options are shown
			pages: '.svelte-kit/static/build',
			assets: '.svelte-kit/static/build',
			fallback: null
		})
	}
};

export default config;
