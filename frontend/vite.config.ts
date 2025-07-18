import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [UnoCSS(), sveltekit()],
  // Backend hmr proxy fix thanks to github.com/TimeEnjoyed
  server: {
    hmr: {
      port: 5174
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
};

export default config;
