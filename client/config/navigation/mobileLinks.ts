export type mobileLink = {
  name: string;
  path: string;
  icons: string;
};

export const mobileLinks: mobileLink[] = [
  {
    name: "Home",
    path: "#",
    icons: "bi-house-door",
  },
  {
    name: "About",
    path: "#about",
    icons: "bi-person",
  },
  {
    name: "Technologies",
    path: "#technologies",
    icons: "bi-cpu",
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
