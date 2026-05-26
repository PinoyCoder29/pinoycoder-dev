import styles from "./style.module.css";
export default function AboutSection() {
  return (
    <>
      <section id="about" className={styles.aboutSection}>
        <h1 className={styles.aboutText}>About Me</h1>
        <div className={`${styles.aboutContainer}`}>
          <div className={`${styles.aboutContent}`}>
            <img src="/portfolio.png" alt="" className={styles.aboutProfile} />
            <div className={styles.topBox}></div>

            <div className={styles.bottomBox}>
              <h1 className={styles.aboutName}>Jay-Vee S. Bico</h1>
              <p>Pinoycoder</p>
            </div>
          </div>
          <div className={`${styles.aboutSkills}`}></div>
        </div>
      </section>
    </>
  );
}
