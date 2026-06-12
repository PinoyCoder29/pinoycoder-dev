import { navLinks } from "@/config/navLinks";
import styles from "./style.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-md-4 col-4">
              <div className={styles.leftContent}>
                <div className={styles.aboutContent}>
                  <div className={styles.imageWrapper}>
                    <img src="/pinoycoder.png" alt="pinoycoder" />
                  </div>
                  <p>PinoyCoder</p>
                </div>

                <p className={styles.motivation}>
                  “The best way to learn programming is by building, not
                  watching.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <p>Contact </p>
              <div className={styles.centerContent}>
                <a href="">
                  <i className="bi bi-envelope">bjayvee31@gmail.com</i>
                </a>
                <a href="">
                  <i className="bi bi-telephone">+639913084418</i>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <p>Navigate</p>
              <div className={styles.rightContent}>
                {navLinks.map((item, i) => {
                  return (
                    <a href="" key={i}>
                      <i className={`bi ${item.icon} text-light `}></i>
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
