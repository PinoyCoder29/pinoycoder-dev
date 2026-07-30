"use client";

import { useRouter } from "next/navigation";
import { Projects } from "@/config/projects";
import styles from "./style.module.css";

export default function ProjectSection() {
  const router = useRouter();

  const handleCardClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <section className={styles.projectSection} id="projects">
      <div className={styles.sectionTitle}>
        <p>PROJECTS</p>
      </div>

      {Projects.map((item) => (
        <article
          key={item.slug}
          id={item.slug}
          className={styles.projectContainer}
          onClick={() => handleCardClick(item.slug)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCardClick(item.slug);
            }
          }}
        >
          {/* Logo */}
          <div className={styles.projectLogo}>
            {item.hero.logo ? (
              <img src={item.hero.logo} alt={`${item.hero.title} logo`} />
            ) : (
              <span>{item.hero.title}</span>
            )}
          </div>

          {/* Title */}
          <h2 className={styles.projectTitle}>{item.hero.title}</h2>

          {/* Image */}
          <div className={styles.imageWrapper}>
            <div className={styles.projectLink}>
              <span className={styles.dot1}></span>
              <span className={styles.dot2}></span>
              <span className={styles.dot3}></span>

              <a
                href={item.hero.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View Project
              </a>
            </div>

            <img
              src={item.hero?.image}
              alt={`${item.hero.title} preview`}
              className={styles.projectImage}
            />
          </div>

          {/* Description */}
          <h3 className={styles.subTitle}>{item.hero?.subtitle}</h3>

          <p className={styles.projectDescription}>
            {item.overview?.description}
          </p>

          {/* Tech Stack */}
          <div className={styles.techstackWrapper}>
            {item.techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <div key={tech.name} className={styles.techItem}>
                  <Icon
                    className={styles.projectTechstack}
                    style={{
                      color: tech.color,
                      backgroundColor: tech.bgColor,
                    }}
                  />

                  {/* <span>{tech.name}</span> */}
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </section>
  );
}
