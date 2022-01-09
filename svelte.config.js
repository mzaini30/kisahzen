// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import WindiCSS from "vite-plugin-windicss";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      precompress: true,
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      plugins: [WindiCSS()],
    },
  },
  extensions: [".svelte", ".svx"],
  preprocess: mdsvex({
    layout: {
      _: "./src/lib/layout/blog.svelte",
    },
  }),
};

export default config;
