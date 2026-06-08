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
              <p className={styles.projectTitle}>{item.title}</p>
              <img
                src={item.image}
                alt={item.title}
                className={styles.projectImage}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}
