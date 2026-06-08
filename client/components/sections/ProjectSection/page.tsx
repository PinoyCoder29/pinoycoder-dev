import { Projects } from "@/config/projects";
import styles from "./style.module.css";
export default function ProjectSection() {
  return (
    <>
      <section className={styles.projectSection} id="projects">
        <div className={styles.sectionTitle}>
          <p>PROJECTS</p>
        </div>
        {Projects.map((item) => {
          return (
            <div className={styles.projectContainer} key={item.logo}>
              <div className={styles.projectLogo}>
                <img src={item.logo} alt={item.title} />
              </div>

              <p className={styles.projectTitle}>{item.title}</p>

              <div className={styles.imageWrapper}>
                <div className={styles.projectLink}>
                  <span className={styles.dot1}></span>
                  <span className={styles.dot2}></span>
                  <span className={styles.dot3}></span>

                  <a href={item.path}>View Project</a>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.projectImage}
                />
              </div>

              <h3 className={styles.subTitle}>{item.subTitle}</h3>
              <p className={styles.projectDescription}>{item.description}</p>
              <div className={styles.techstackWrapper}>
                {item.techStack.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <Icon
                      className={styles.projectTechstack}
                      key={i}
                      style={{ color: tech.color }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
