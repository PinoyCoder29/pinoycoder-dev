import styles from "./style.module.css";
import { socialLinks } from "@/config/socialLink";
export default function ContactSection() {
  return (
    <>
      <footer className={styles.contact}>
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
              <p>Social</p>
              <div className={styles.centerContent}>
                {socialLinks.map((item, i) => {
                  return (
                    <a href={item.path} key={i}>
                      <i
                        style={{ color: item.color }}
                        className={`bi ${item.icon}`}
                      ></i>
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="col-md-4 col-4">
              <p>Contact</p>
              <div className={styles.rightContent}>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                  <i className="bi bi-envelope">bjayvee31@gmail.com</i>
                </a>
                <a href="">
                  <i className="bi bi-telephone">+639913084418</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
