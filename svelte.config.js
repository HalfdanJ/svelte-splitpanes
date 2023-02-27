import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: undefined
		}),
		paths: {
			// Usually the base path will be the root (i.e. defaults by kit to the empty "" path since the env var is undefined),
			//  but on the official documentation build we set this environment
			//  variable to the base path where we're deploying to.
			base: process.env.BASE_PATH
		}
	},

	package: {
		exports: (filename) => filename === 'index.ts',
		files: (filename) => !filename.endsWith('.scss') // Don't include theme files
	}
};

export default config;
