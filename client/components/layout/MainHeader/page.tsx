"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import { navLinks } from "@/config/navigation/navLink";
import { socialLinks } from "@/config/socialLink";

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <nav className={`navbar fixed-top ${styles.nav}`}>
      <div className="container-fluid">
        <div className="row align-items-center w-100">
          {/* LEFT */}
          <div className="col-6 col-md-4 order-1 d-flex align-items-center gap-2">
            <Image src="/pinoycoder.png" alt="logo" width={60} height={40} />

            <h1
              className={`navbar-brand text-light mb-0 ${styles.navbarBrand}`}
            >
              PinoyCoder
            </h1>
          </div>

          {/* CENTER */}
          {/* Mobile: shares the row with LEFT (col-6), sits opposite/across the logo */}
          {/* Desktop (md+): sits in the middle column */}
          <div className="col-6 col-md-4 order-2 d-flex justify-content-center">
            <ul className={`navbar-nav flex-row ${styles.center}`}>
              {navLinks.map((item) => (
                <li className="nav-item" key={item.path}>
                  <a
                    href={item.path}
                    className={`nav-link ${
                      pathname === item.path ? styles.active : "text-secondary"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          {/* Hidden entirely on mobile (no grid space taken) since social links are desktop-only */}
          <div className="col-md-4 order-3 d-none d-md-flex justify-content-end">
            <div className={`gap-3 d-flex ${styles.social}`}>
              <a href="https://github.com/PinoyCoder29" className="">
                <i className="bi bi-arrow-up-right"></i> Github
              </a>
              <a href="https://www.linkedin.com/in/jay-vee-bico-22533734b/">
                {" "}
                <i className="bi bi-arrow-up-right"></i> LinkedIn
              </a>
              <a href="/resume/Jay-Vee_Bico_Resume.pdf">
                {" "}
                <i className="bi bi-arrow-up-right"></i> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
