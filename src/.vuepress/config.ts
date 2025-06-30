import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "DataVim",
  description: "A personal website",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
