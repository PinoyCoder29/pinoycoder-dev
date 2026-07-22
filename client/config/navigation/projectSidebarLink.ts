import { Projects } from "../projects";

export const ProjectSidebarLinks = Projects.map((project) => ({
  name: `${project.title}`,
  path: `/${project.slug}`,
  icon: `${project.logo}`,
}));
