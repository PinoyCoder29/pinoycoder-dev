export type navlink = {
  name: string;
  path: string;
  icon: string;
};
export const navLinks: navlink[] = [
  {
    name: "Home",
    path: "#home",
    icon: "bi-house",
  },
  {
    name: "About",
    path: "#about",
    icon: "bi-person",
  },
  {
    name: "Technologies",
    path: "#technologies",
    icon: "bi-gear",
  },
  {
    name: "Projects",
    path: "#projects",
    icon: "bi-kanban",
  },
];
