import styles from "./style.module.css";
export default function HomeSection() {
  return (
    <>
      <section id="home" className={`${styles.homeSection}`}>
        <div className={`${styles.homeContainer}`}>
          <div className={`${styles.homeTitle}`}>
            <h1>Full-Stack Web Developer</h1>
            <p>
              I build modern and responsive web applications using both frontend
              and backend technologies, focusing on performance, usability, and
              clean code.
            </p>
          </div>
          <div className={`${styles.heroProfile}`}>
            <div className="">
              <h1 className={`${styles.profileName}`}>PinoyCoder</h1>
            </div>
            <img src="/portfolio.png" className={`${styles.heroPicture}`}></img>
          </div>
        </div>
      </section>
    </>
  );
}
