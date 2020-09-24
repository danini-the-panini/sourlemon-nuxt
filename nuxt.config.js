import fs from 'fs';
import path from 'path';

export default {
  modules: [
    '@nuxt/content',
    '@nuxtjs/pwa',
  ],
  target: 'static',
  generate: {
    async routes() {
      let files = await fs.promises.readdir('./content/articles');

      return files.map(file => {
        return `/blog/${path.basename(file, '.md')}`
      });
    }
  },
}
