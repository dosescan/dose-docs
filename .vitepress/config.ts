import { defineConfig } from "vitepress";
import {
  DOCS_SITE_URL,
  REPO_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  nav,
  sidebar,
  socialLinks,
} from "./site";

const BASE_PATH = process.env.DOCS_BASE_PATH ?? "/";
const withBasePath = (path: string): string =>
  `${BASE_PATH}${path.replace(/^\//, "")}`;

export default defineConfig({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  base: BASE_PATH,
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: DOCS_SITE_URL,
  },
  head: [
    ["meta", { name: "theme-color", content: "#0891b2" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: SITE_TITLE }],
    ["meta", { property: "og:description", content: SITE_DESCRIPTION }],
    [
      "meta",
      { property: "og:image", content: withBasePath("/assets/dose-hero.png") },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["link", { rel: "icon", href: withBasePath("/favicon.svg") }],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/favicon.svg",
    nav,
    sidebar,
    socialLinks,
    search: {
      provider: "local",
    },
    editLink: {
      pattern: `${REPO_URL}/edit/main/:path`,
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released as an open-source security tool.",
      copyright: "Copyright (c) Sabbir and DOSE contributors.",
    },
  },
});
