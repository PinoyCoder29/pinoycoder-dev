export type sidebarlink = {
  name: string;
  path: string;
  icons: string;
};
export const sidebarLinks: sidebarlink[] = [
  {
    name: "Home",
    path: "#home",
    icons: "bi-house",
  },
  {
    name: "About",
    path: "#about",
    icons: "bi-person",
  },
  {
    name: "Technologies",
    path: "#technologies",
    icons: "bi-gear",
  },
  // {
  //   name: "Projects",
  //   path: "#projects",
  //   icon: "bi-kanban",
  // },
  {
    name: "Contact",
    path: "#contact",
    icons: "bi-person-rolodex",
  },
];
