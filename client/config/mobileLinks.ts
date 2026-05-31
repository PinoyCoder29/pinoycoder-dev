export type mobileLink = {
  name: string;
  path: string;
  icon: string;
};

export const mobileLinks: mobileLink[] = [
  {
    name: "Home",
    path: "#home",
    icon: "bi-house-door",
  },
  {
    name: "About",
    path: "#about",
    icon: "bi-person",
  },
  {
    name: "Technologies",
    path: "#technologies",
    icon: "bi-cpu",
  },
  {
    name: "Projects",
    path: "#projects",
    icon: "bi-kanban",
  },
  {
    name: "Contact",
    path: "#contact",
    icon: "bi-person-rolodex",
  },
];
