"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { socialLinks } from "@/config/socialLink";
import { navLinks } from "@/config/navLink";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathName = usePathname();
  return (
    <nav className={`navbar navbar-expand-md fixed-top ${styles.nav}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* LEFT SIDE */}
        <div className="d-flex align-items-center gap-2">
          <Image alt="logo" src="/pinoycoder.png" width={60} height={40} />
          <h1 className={`navbar-brand text-light mb-0 ${styles.navbarBrand}`}>
            PinoyCoder
          </h1>
        </div>

        {/* center */}
        <div className="d-flex mx-auto">
          <ul className={`navbar-nav ${styles.center}`}>
            {navLinks.map((item) => {
              return (
                <li className={`nav-item `} key={item.path}>
                  <a
                    href={item.path}
                    className={`nav-link   ${pathName === item.path ? styles.active : "text-secondary"}`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="d-flex gap-3">
          {socialLinks.map((item) => (
            <div key={item.name}>
              <a href={item.path}>
                <i
                  className={`bi ${item.icon} ${styles.itemIcon}`}
                  style={{ color: item.color }}
                ></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
