import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
  compilerOptions: {
    runes: true
  },
  kit: {
    adapter: adapter({
      // Routes configuration for Cloudflare Workers
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
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
