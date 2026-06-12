"use client";
import styles from "./style.module.css";
import { motion } from "framer-motion";
export default function HomeSection() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        id="home"
        className={`${styles.homeSection}`}
      >
        <div className={`${styles.homeContainer}`}>
          <div className={`${styles.homeTitle}`}>
            <h1>Full-Stack Web Developer</h1>
            <p>
              I build modern and responsive web applications using both frontend
              and backend technologies, focusing on performance, usability, and
              clean code.
            </p>
            <a href="#projects">
              View Projects
              <i className="bi bi-arrow-down"></i>
            </a>
          </div>
          <div className={`${styles.heroProfile}`}>
            <div className="">
              <h1 className={`${styles.profileName}`}>PinoyCoder</h1>
            </div>
            <img src="/portfolio.png" className={`${styles.heroPicture}`}></img>
          </div>
        </div>
      </motion.section>
    </>
  );
}
