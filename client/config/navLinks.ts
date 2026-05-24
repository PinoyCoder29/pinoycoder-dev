export type navlink = {
  name: string;
  path: string;
  icon: string;
};

export const navlinks: navlink[] = [
  {
    name: "Home",
    path: "/",
    icon: "bi-door-lock",
  },
  {
    name: "About",
    path: "/#about",
    icon: "bi-door-lock",
  },
];
