import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  // adapter: node({
  //   mode: 'standalone'
  // })
    adapter: netlify(),
});
