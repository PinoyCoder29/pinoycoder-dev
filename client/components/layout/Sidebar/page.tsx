"use client";
import { navlinks } from "@/config/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import { mobileLinks } from "@/config/mobileLinks";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  const handleClick = (path: string) => {
    if (window.location.pathname + window.location.hash === path) return;
  };
  return (
    <>
      <aside
        className={`d-none d-md-block ${styles.sidebar}  text-light ms-auto`}
      >
        <Image
          src="/pinoycoder.png"
          width={100}
          height={70}
          alt="Pinoycoder logo"
          className={styles.logo}
        ></Image>
        <ul className={`nav flex-column shadow ${styles.navItem}`}>
          {navlinks.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.path} className="nav-item">
                <Link
                  href={item.path}
                  className={` nav-link px-5 text-light ${styles.link} ${isActive ? styles.active : ""}`}
                  onClick={() => handleClick(item.path)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      {/* mobile */}
      <nav
        className={`${styles.fixedButton} d-md-none fixed-bottom border-top bg-dark text-light`}
      >
        <ul className="justify-content-around py-3 nav">
          {mobileLinks.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`text-light nav-link ${isActive ? styles.active : ""}`}
                >
                  {" "}
                  {item.name}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
