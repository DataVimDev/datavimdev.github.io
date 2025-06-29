import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Posts",
    icon: "database",
    prefix: "/posts/",
    children: [
        {
            text:"Infinite Class Field Towers",
            icon: "pen",
            link: "inf_cft"
        },
        {
        text: "Vim Related",
        icon: "pen-to-square",
        prefix: "vim/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
    ],
  },
]);
