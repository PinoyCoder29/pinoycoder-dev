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
  const [isPaused, setIsPaused] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      clearTimer();
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      setIsTransitioning(true);
      transitionTimerRef.current = setTimeout(() => {
        setActiveIndex(index);
        setVideoProgress(0);
        setIsTransitioning(false);
      }, 300);
    },
    [activeIndex],
  );

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % achievements.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + achievements.length) % achievements.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const current = achievements[activeIndex];
    if (current?.type === "image" && !isPaused) {
      timerRef.current = setTimeout(() => {
        goNext();
      }, current.duration ?? 3000);
    }
    return () => clearTimer();
  }, [activeIndex, isPaused, goNext]);

  useEffect(() => {
    const current = achievements[activeIndex];
    if (current?.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      if (!isPaused) videoRef.current.play();
    }
  }, [activeIndex, isPaused]);

  useEffect(() => {
    const current = achievements[activeIndex];
    if (current?.type === "video" && videoRef.current) {
      if (isPaused) videoRef.current.pause();
      else videoRef.current.play();
    }
  }, [isPaused, activeIndex]);

  useEffect(() => {
    return () => {
      clearTimer();
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, []);

  const handleVideoEnded = () => {
    goNext();
  };

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setVideoProgress((video.currentTime / video.duration) * 100);
    }
  };

  const current = achievements[activeIndex];

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
                  <h1 className={styles.aboutName}>
                    Jay-Vee S. Bico <span className="">Open to work</span>
                  </h1>
                  <p className="text-light">
                    Junior Web Developer | Next.js | React | TypeScript |
                    Express.js
                  </p>
                  <p>
                    Sariaya, Calabarzon, Philippines{" "}
                    <a href="">· Contact info</a>
                  </p>

                  <div className={`${styles.details}`}>
                    <p>Open To Work</p>
                    <p>
                      Open to work Southeast Asia | Hybrid · Remote · On-site
                      Show details
                    </p>
                  </div>
                  {/* <div className={styles.socialScroll}>
                    <div className={styles.socialWrapper}>
                      {socialLinks.map((item) => (
                        <div className={styles.socialItem} key={item.name}>
                          
                            href={item.path}
                            className={`bi ${item.icon}`}
                            style={{ color: item.color }}
                          ></a>
                        </div>
                      ))}
                    </div>
                  </div> */}
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

        <section id="about">
          <div className={styles.achievementsContainer}>
            <div
              className={styles.achievementsContent}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className={styles.achievementsHeader}>
                <p className={styles.achievementsTitle}>Achievements</p>
                <span className={styles.achievementsCounter}>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(achievements.length).padStart(2, "0")}
                </span>
              </div>

              <div className={styles.carouselWrapper}>
                <div className={styles.progressBar}>
                  {achievements.map((item, i) => (
                    <div className={styles.progressSegment} key={i}>
                      {i === activeIndex && item.type === "image" && (
                        <div
                          key={activeIndex}
                          className={styles.progressFillAnimated}
                          style={{
                            animationDuration: `${item.duration ?? 3000}ms`,
                            animationPlayState: isPaused ? "paused" : "running",
                          }}
                        />
                      )}
                      {i === activeIndex && item.type === "video" && (
                        <div
                          className={styles.progressFillManual}
                          style={{ width: `${videoProgress}%` }}
                        />
                      )}
                      {i < activeIndex && (
                        <div className={styles.progressFillDone} />
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className={styles.carouselTrack}
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                  }}
                >
                  {current.type === "image" ? (
                    <img
                      key={activeIndex}
                      src={current.src}
                      alt={current.alt}
                    />
                  ) : (
                    <video
                      key={activeIndex}
                      ref={videoRef}
                      muted
                      playsInline
                      onEnded={handleVideoEnded}
                      onTimeUpdate={handleVideoTimeUpdate}
                    >
                      <source src={current.src} type="video/mp4" />
                    </video>
                  )}
                  <div className={styles.carouselOverlay} />
                </div>

                <button
                  className={`${styles.carouselNav} ${styles.carouselPrev}`}
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous achievement"
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
                  className={`${styles.carouselNav} ${styles.carouselNext}`}
                  type="button"
                  onClick={goNext}
                  aria-label="Next achievement"
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

                <div className={styles.carouselDots}>
                  {achievements.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`${styles.dot} ${
                        i === activeIndex ? styles.dotActive : ""
                      }`}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.achievementsDescription}>
              <div className={styles.descriptionContent} key={activeIndex}>
                <span className={styles.descriptionTag}>Featured</span>
                <h2 className={styles.descriptionTitle}>{current.title}</h2>
                <p className={styles.descriptionText}>{current.description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
