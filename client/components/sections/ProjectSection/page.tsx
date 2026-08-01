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
        <span className={styles.sectionEyebrow}>~/projects</span>
        <p>Projects</p>
        <span className={styles.sectionCount}>
          {String(Projects.length).padStart(2, "0")} repositories
        </span>
      </div>

      <div className={styles.projectGrid}>
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
            {/* Repo header */}
            <div className={styles.repoHeader}>
              <div className={styles.repoIdentity}>
                <div className={styles.projectLogo}>
                  {item.hero.logo ? (
                    <img src={item.hero.logo} alt={`${item.hero.title} logo`} />
                  ) : (
                    <span>{item.hero.title.charAt(0)}</span>
                  )}
                </div>
                <h2 className={styles.projectTitle}>{item.hero.title}</h2>
              </div>

              <a
                href={item.hero.path}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoLink}
                onClick={(e) => e.stopPropagation()}
              >
                <span className={styles.statusDot} />
                View Project
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>

            {/* Preview image */}
            <div className={styles.imageWrapper}>
              <img
                src={item.hero?.image}
                alt={`${item.hero.title} preview`}
                className={styles.projectImage}
              />
              <div className={styles.imageOverlay}>
                <span>Open preview</span>
              </div>
            </div>

            {/* Subtitle + description */}
            <h3 className={styles.subTitle}>{item.hero?.subtitle}</h3>
            <p className={styles.projectDescription}>
              {item.overview?.description}
            </p>

            {/* Tech stack as "topics" */}
            <div className={styles.techstackWrapper}>
              {item.techStack.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className={styles.techItem}
                    style={
                      {
                        "--tech-color": tech.color,
                        "--tech-bg": tech.bgColor,
                      } as React.CSSProperties
                    }
                  >
                    <Icon className={styles.projectTechstack} />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
