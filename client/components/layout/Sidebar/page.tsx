"use client";

import { navLinks } from "@/config/navLinks";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { mobileLinks } from "@/config/mobileLinks";
import Image from "next/image";

export default function Siderbar() {
  const [active, setActive] = useState("#home");

  // 🔥 SCROLL SPY (auto detect section on scroll)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className={`d-none d-md-block ${styles.sidebar}`}>
        <ul className={`nav flex-column gap-1 ${styles.navItem}`}>
          <div className="text-center mb-2">
            <Image
              alt="logo"
              src="/pinoycoder.png"
              width={85}
              height={60}
              className={styles.logo}
            />
          </div>

          {navLinks.map((item) => (
            <li key={item.path} className="nav-item">
              <a
                href={item.path}
                className={`gap-2 d-flex nav-link text-light ${
                  styles.navLink
                } ${active === item.path ? styles.active : ""}`}
                onClick={() => setActive(item.path)}
              >
                <i className={`bi ${item.icon}`}></i>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav
        className={`navbar navbar-expand-md border-top d-md-none fixed-bottom ${styles.mobilebar}`}
      >
        <ul className="navbar-nav d-flex flex-row justify-content-around w-100">
          {mobileLinks.map((item) => (
            <li className="nav-item" key={item.path}>
              <a
                href={item.path}
                className={`${item.icon} nav-link text-light ${
                  styles.mobileLink
                } ${active === item.path ? styles.mobileActive : ""}`}
                onClick={() => setActive(item.path)}
              ></a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
