import { Projects } from "../projects";

export const ProjectSidebarLinks = Projects.map((project) => ({
  name: `${project.hero?.title}`,
  path: `/projects/${project.slug}`,
  icons: `${project.icons}`,
}));
