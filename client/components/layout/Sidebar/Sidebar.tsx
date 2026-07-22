"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { sidebarlink } from "@/config/sidebarLinks";

type SidebarProps = {
  links: sidebarlink[];
  activeLink: string;
  onLinkClick?: (path: string) => void;
};

export default function Sidebar({
  links,
  activeLink,
  onLinkClick,
}: SidebarProps) {
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
            <li key={item.path} className="nav-item">
              <Link
                href={item.path}
                onClick={() => onLinkClick?.(item.path)}
                className={`d-flex gap-2 nav-link ${
                  activeLink === item.path ? styles.active : styles.navLink
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
                className={`nav-link text-light ${
                  activeLink === item.path
                    ? styles.mobileActive
                    : styles.mobileLink
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
