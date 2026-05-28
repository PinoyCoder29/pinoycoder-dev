"use client";
import { navLinks } from "@/config/navLinks";
import styles from "./style.module.css";
import { useState } from "react";
import { mobileLinks } from "@/config/mobileLinks";
import Image from "next/image";
export default function Siderbar() {
  const [active, setActive] = useState("#home");

  return (
    <>
      {/* desktop */}
      <aside className={`d-none d-md-block ${styles.sidebar}`}>
        <ul className={`nav flex-column gap-1 ${styles.navItem} `}>
          <div className="text-center mb-2">
            <Image
              alt="logo"
              src="/pinoycoder.png"
              width={85}
              height={60}
            ></Image>
          </div>
          {navLinks.map((item) => {
            return (
              <li key={item.path} className="nav-item ">
                <a
                  href={item.path}
                  className={`gap-2 d-flex nav-link text-light ${styles.navLink} ${active === item.path ? styles.active : ""}`}
                  onClick={() => setActive(item.path)}
                >
                  <i className={`bi ${item.icon}`}></i>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* mobile */}
      <nav
        className={`navbar navbar-expand-md border-top d-md-none fixed-bottom ${styles.mobilebar}`}
      >
        <ul className="navbar-nav d-flex flex-row justify-content-around w-100">
          {mobileLinks.map((item) => {
            return (
              <li className="nav-item " key={item.path}>
                <a
                  href={item.path}
                  className={`${item.icon} nav-link text-light ${styles.mobileLink} ${active === item.path ? styles.mobileActive : ""}`}
                  onClick={() => setActive(item.path)}
                ></a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
