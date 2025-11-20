import { generateSitemap } from "vite-plugin-sitemap";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/vehicles", changefreq: "weekly", priority: 0.8 },
  { url: "/facilities", changefreq: "weekly", priority: 0.8 },
  { url: "/packages", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/privacypolicy", changefreq: "monthly", priority: 0.7 },
  { url: "/termsandconditions", changefreq: "monthly", priority: 0.7 }
];

generateSitemap({
  hostname: "https://gosarathi.com",
  outDir: "dist",
  routes: links
});
