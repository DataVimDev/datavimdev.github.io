import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Posts",
    icon: "database",
    prefix: "/posts/",
    children: [
        {
        text: "Vim Related",
        icon: "pen-to-square",
        prefix: "vim/",
        children: [
          { text: "Config", icon: "pen-to-square", link: "my_config" },
          { text: "Why NeoVim?", icon: "pen-to-square", link: "why_neovim" },
        ],
      },
    ],
  },
]);
