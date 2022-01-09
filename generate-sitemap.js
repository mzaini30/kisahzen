import { SitemapManager } from "sitemap-manager";
import recursive from "recursive-readdir-sync";

const situs = "https://kisahzen.com";
let files = recursive("build");
files = ["build/", ...files];
files = files.map((x) => x.replace(/^build/, situs));

let filesRapi = [];
files = files.forEach((x) => {
  filesRapi = [
    ...filesRapi,
    {
      loc: x,
      lastmod: new Date(),
      changefreq: 3,
      priority: 0.5,
    },
  ];
});

const MySitemap = new SitemapManager({
  siteURL: situs,
});

MySitemap.addUrl("unmei", filesRapi);
MySitemap.finish();
