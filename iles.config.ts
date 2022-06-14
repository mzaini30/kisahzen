import { defineConfig } from "iles";
import unocss from "unocss/vite";
import transformerDirective from "@unocss/transformer-directives";
import { presetUno, presetTypography } from "unocss";
import presetIcons from "@unocss/preset-icons";
import prism from "@islands/prism";
import inspector from "vite-plugin-vue-inspector";

export default defineConfig({
  siteUrl: "https://www.kisahzen.com/",
  turbo: true,
  modules: [
    prism({
      showLineNumbers: true,
    }),
  ],
  vite: {
    plugins: [
      inspector(),
      unocss({
        transformers: [transformerDirective()],
        presets: [presetUno(), presetTypography(), presetIcons()],
      }),
    ],
  },
});
