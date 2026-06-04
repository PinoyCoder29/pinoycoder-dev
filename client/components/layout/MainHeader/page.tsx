import Image from "next/image";
import styles from "./style.module.css";
import { socialLinks } from "@/config/socialLink";

export default function MainHeader() {
  return (
    <nav className={`navbar navbar-expand-md fixed-top ${styles.nav}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* LEFT SIDE */}
        <div className="d-flex align-items-center gap-2">
          <Image alt="logo" src="/pinoycoder.png" width={60} height={40} />
          <h1 className="navbar-brand text-light mb-0">PinoyCoder</h1>
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
