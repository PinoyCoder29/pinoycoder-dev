import { Projects } from "@/config/projects";
import { notFound } from "next/navigation";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = Projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <h1>{project.title}</h1>

      <p>{project.description}</p>

      <h2>Technologies</h2>

      {Projects.map((item) => (
        <span key={item.title}>{project.description}</span>
      ))}
    </section>
  );
}
