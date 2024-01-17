import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";
import remarkCodeTitles from 'remark-code-titles';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';



// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCodeTitles],
    extendDefaultPlugins: true,
  },
  integrations: [tailwind(), react(), mdx()]
});