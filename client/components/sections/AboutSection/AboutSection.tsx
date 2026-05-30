import { techStacks } from "@/config/techStacks";
import styles from "./style.module.css";
import { socialLinks } from "@/config/socialLink";

export default function AboutSection() {
  return (
    <>
      <section id="about" className={styles.aboutSection}>
        <h1 className={styles.aboutText}>About Me</h1>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <img src="/portfolio.png" alt="" className={styles.aboutProfile} />
            <div className={styles.topBox}></div>
            <div className={styles.bottomBox}>
              <h1 className={styles.aboutName}>Jay-Vee S. Bico</h1>
              <p>Pinoycoder</p>
              <p>Stay consistent, stay improving...</p>
              <div className={styles.socialScroll}>
                {/* <h1 className={styles.socialName}>Social Media</h1> */}
                <div className={styles.socialWrapper}>
                  {socialLinks.map((item) => {
                    return (
                      <div className={styles.socialItem} key={item.name}>
                        <a
                          href={item.path}
                          className={`bi ${item.icon}`}
                          style={{ color: item.color }}
                        ></a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.aboutSkills}>
            <div className={styles.skillsHeader}>
              <p className={styles.skillsTitle}>Tech Stack</p>
            </div>

            <div className={styles.skillsScroll}>
              <div className={styles.techWrapper}>
                {techStacks.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div className={styles.techItem} key={tech.name}>
                      <Icon style={{ color: tech.color }} />
                      <p>{tech.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
