import styles from "./style.module.css";
import { socialLinks } from "@/config/socialLink";

const contactLinks = [
  {
    name: "bjayvee31@gmail.com",
    path: "mailto:bjayvee31@gmail.com",
    icon: "bi-envelope",
  },
  {
    name: "+63 991 308 4418",
    path: "tel:+639913084418",
    icon: "bi-telephone",
  },
];

export default function ContactSection() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className="row d-flex justify-content-around gy-4">
          <div className="col-md-4 col-12">
            <div className={styles.leftContent}>
              <div className={styles.imageWrapper}>
                <img src="/pinoycoder.png" alt="PinoyCoder" />
              </div>
              <p className={styles.name}>PinoyCoder</p>
              <p className={styles.motivation}>
                "The best way to learn programming is by building, not
                watching."
              </p>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <p className={styles.sectionLabel}>Social</p>
            <div className={styles.linkGroup}>
              {socialLinks.map((item, i) => (
                <a
                  href={item.path}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className={styles.pill}
                >
                  <i
                    style={{ color: item.color }}
                    className={`bi ${item.icon} ${styles.pillIcon}`}
                    aria-hidden="true"
                  ></i>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-4 col-12">
            <p className={styles.sectionLabel}>Contact</p>
            <div className={styles.linkGroup}>
              {contactLinks.map((item, i) => (
                <a
                  href={item.path}
                  key={i}
                  aria-label={item.name}
                  className={styles.pill}
                >
                  <i
                    className={`bi ${item.icon} ${styles.pillIcon}`}
                    aria-hidden="true"
                  ></i>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
