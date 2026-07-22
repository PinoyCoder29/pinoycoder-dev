"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import { sidebarlink } from "@/config/navigation/sidebarLinks";

type SidebarProps = {
  links: sidebarlink[];
  activeLink?: string;
  onLinkClick?: (path: string) => void;
};

export default function Sidebar({
  links,
  activeLink,
  onLinkClick,
}: SidebarProps) {
  const pathname = usePathname();
  const linkRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const isActive = (path: string) => {
    if (path.startsWith("#")) {
      return activeLink === path;
    }
    // kung may activeLink na nagbabago habang nag-sscroll (e.g. sa /projects page)
    if (activeLink) {
      return activeLink === path;
    }
    return pathname === path;
  };

  useEffect(() => {
    if (!activeLink) return;
    const activeEl = linkRefs.current[activeLink];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // "center" kung gusto mong laging nasa gitna
      });
    }
  }, [activeLink]);

  return (
    <>
      {/* Desktop */}
      <aside className={`d-none d-md-block ${styles.sidebar}`}>
        <div className="text-center mb-3">
          <Image
            src="/pinoycoder.png"
            alt="logo"
            width={85}
            height={60}
            className={styles.logo}
          />
        </div>

        <ul className={`nav flex-column gap-1 ${styles.navItem}`}>
          {links.map((item) => (
            <li
              key={item.path}
              ref={(el) => {
                linkRefs.current[item.path] = el;
              }}
              className="nav-item"
            >
              <Link
                href={item.path}
                onClick={() => onLinkClick?.(item.path)}
                className={`d-flex gap-2 nav-link ${
                  isActive(item.path) ? styles.active : styles.navLink
                }`}
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile */}
      <nav
        className={`navbar border-top d-md-none fixed-bottom ${styles.mobilebar}`}
      >
        <ul className="navbar-nav d-flex flex-row justify-content-around w-100">
          {links.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                href={item.path}
                onClick={() => onLinkClick?.(item.path)}
                className={`nav-link ${
                  isActive(item.path) ? styles.mobileActive : styles.mobileLink
                }`}
              >
                <i className={`bi ${item.icon}`}></i>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
