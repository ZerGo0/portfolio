import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// Backend hmr proxy fix thanks to github.com/TimeEnjoyed
	server: {
		hmr: {
			port: 5174
		}
	}
});
