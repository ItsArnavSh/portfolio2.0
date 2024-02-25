
import adapter from 'svelte-adapter-github';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      domain: '',
      jekyll: false
    }),  target: '#svelte',
    paths: {
      base: '/your-repo', // Update with your repository name
    }
  },
  preprocess: vitePreprocess()
};
export default config;