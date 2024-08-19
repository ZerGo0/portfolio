import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = '/portfolio';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		alias: {
			$lib: './src/lib',
			'@data': './src/lib/data',
			'@components': './src/lib/components',
			'@md': './src/lib/md',
			'@stores': './src/lib/stores',
			'@utils': './src/lib/utils'
		},
		paths: {
			base: ''
		}
	}
};

export default config;
