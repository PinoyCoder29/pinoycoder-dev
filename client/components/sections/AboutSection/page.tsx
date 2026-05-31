"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { techStacks } from "@/config/techStacks";
import styles from "./style.module.css";
import { socialLinks } from "@/config/socialLink";
import { achievements } from "@/config/achievements";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = useCallback((index: number) => {
    clearTimer();
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % achievements.length;
      goTo(next);
      return prev;
    });
  }, [goTo]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev - 1 + achievements.length) % achievements.length;
      goTo(next);
      return prev;
    });
  }, [goTo]);

  useEffect(() => {
    const current = achievements[activeIndex];
    if (current?.type === "image") {
      timerRef.current = setTimeout(() => {
        goNext();
      }, current.duration ?? 3000);
    }
    return () => clearTimer();
  }, [activeIndex, goNext]);

  useEffect(() => {
    const current = achievements[activeIndex];
    if (current?.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [activeIndex]);

  const handleVideoEnded = () => {
    goNext();
  };

  return (
    <>
      <div className={styles.section}>
        <ScrollReveal x={50} y={0}>
          <section id="about" className={styles.aboutSection}>
            <h1 className={styles.aboutText}>About Me</h1>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutContent}>
                <img
                  src="/portfolio.png"
                  alt=""
                  className={styles.aboutProfile}
                />
                <div className={styles.topBox}></div>
                <div className={styles.bottomBox}>
                  <h1 className={styles.aboutName}>Jay-Vee S. Bico</h1>
                  <p>Pinoycoder</p>
                  <p>Stay consistent, stay improving...</p>
                  <div className={styles.socialScroll}>
                    <div className={styles.socialWrapper}>
                      {socialLinks.map((item) => (
                        <div className={styles.socialItem} key={item.name}>
                          <a
                            href={item.path}
                            className={`bi ${item.icon}`}
                            style={{ color: item.color }}
                          ></a>
                        </div>
                      ))}
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
        </ScrollReveal>

        <section id="achievements">
          <div className={styles.achievementsContainer}>
            <div className={styles.achievementsContent}>
              <p className={styles.achievementsTitle}>Achievements</p>
              <div className={styles.carouselWrapper}>
                <div
                  className={styles.carouselTrack}
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {achievements[activeIndex].type === "image" ? (
                    <img
                      key={activeIndex}
                      src={achievements[activeIndex].src}
                      className="d-block"
                      alt={achievements[activeIndex].alt}
                    />
                  ) : (
                    <video
                      key={activeIndex}
                      ref={videoRef}
                      className="d-block"
                      muted
                      playsInline
                      onEnded={handleVideoEnded}
                    >
                      <source
                        src={achievements[activeIndex].src}
                        type="video/mp4"
                      />
                    </video>
                  )}
                </div>

                <button
                  className={styles.carouselPrev}
                  type="button"
                  onClick={goPrev}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  className={styles.carouselNext}
                  type="button"
                  onClick={goNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.achievementsDescription}>
              <div className={styles.descriptionContent}>
                <h2 className={styles.descriptionTitle}>
                  {achievements[activeIndex].title}
                </h2>
                <p className={styles.descriptionText}>
                  {achievements[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
