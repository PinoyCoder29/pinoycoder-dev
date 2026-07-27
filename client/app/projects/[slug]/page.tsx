import Link from "next/link";
import { Projects } from "@/config/projects";
import { notFound } from "next/navigation";
import styles from "./style.module.css";

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
    <>
      <main className={styles.main}>
        <a href="/projects" className={styles.backButton}>
          <i className="bi bi-arrow-left"></i>
          <span>Back to Projects</span>
        </a>
        <section className={styles.projectSection}>
          {/* Back Button */}

          <article className={styles.projectContainer}>
            {/* Logo
          <div className={styles.projectLogo}>
            {project.logo ? (
              <img src={project.logo} alt={`${project.title} logo`} />
            ) : (
              <span>{project.title}</span>
            )}
          </div> */}

            {/* Title */}
            <h2 className={styles.projectTitle}>{project.title}</h2>

            {/* Project Image */}
            <div className={styles.imageWrapper}>
              <div className={styles.projectLink}>
                <span className={styles.dot1}></span>
                <span className={styles.dot2}></span>
                <span className={styles.dot3}></span>

                <a
                  href={project.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>

              <img
                src={project.hero?.image}
                alt={`${project.title} Preview`}
                className={styles.projectImage}
              />
            </div>

            {/* Tech Stack */}
            <div className={styles.techstackWrapper}>
              {project.techStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div key={tech.name}>
                    <Icon
                      className={styles.projectTechstack}
                      style={{
                        color: tech.color,
                        backgroundColor: tech.bgColor,
                      }}
                      title={tech.name}
                    />
                  </div>
                );
              })}
            </div>
          </article>
          <h3 className={styles.subTitle}>{project.hero?.subtitle}</h3>

          {/* Description */}
          <p className={styles.projectDescription}>
            {project.overview?.description}
          </p>
        </section>
        {/* Subtitle */}

        {/* Overview */}
        <section className="mt-5">
          <div className="row">
            <div className="col-md-4 border border-secondary rounded-3">
              <p className="border-bottom pb-4 pt-3"> OverView</p>
              <p className="text-secondary fs-6">
                TYPE <br />{" "}
                <span className="text-light">{project.hero?.type}</span>
              </p>
            </div>
            <div className="col-md-8"></div>
          </div>
        </section>
      </main>
    </>
  );
}
