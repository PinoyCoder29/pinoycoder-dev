"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Styles from "./style.module.css";
import {
  techStacks as coreStack,
  Backend,
  Database,
  FrontEndStacks,
  Deployment,
  AIModels,
  Tools,
} from "@/config/techStacks";
import { education } from "@/config/educations";
import {
  certifications,
  type CertificationItem,
} from "@/config/certifications";

type Category =
  | "All"
  | "Main"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Deployment"
  | "AI/ML"
  | "Tools";

const TABS: Category[] = [
  "All",
  "Main",
  "Frontend",
  "Backend",
  "Databases",
  "Deployment",
  "AI/ML",
  "Tools",
];

export default function SkillsShowcase() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  useEffect(() => {
    if (!activeCert) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    window.addEventListener("keydown", onKeyDown);
    // lock background scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeCert]);

  const allTech = useMemo(
    () => [
      ...FrontEndStacks.map((t) => ({ ...t, category: "Frontend" as const })),
      ...Backend.map((t) => ({ ...t, category: "Backend" as const })),
      ...Database.map((t) => ({ ...t, category: "Databases" as const })),
      ...Deployment.map((t) => ({ ...t, category: "Deployment" as const })),
      ...AIModels.map((t) => ({ ...t, category: "AI/ML" as const })),
      ...Tools.map((t) => ({ ...t, category: "Tools" as const })),
    ],
    [],
  );

  // de-duped list for "All" so items shared across categories (e.g. React, Next.js)
  // don't render twice
  const uniqueAllTech = useMemo(() => {
    const seen = new Set<string>();
    return allTech.filter((t) => {
      if (seen.has(t.name)) return false;
      seen.add(t.name);
      return true;
    });
  }, [allTech]);

  const filteredTech = useMemo(() => {
    if (activeTab === "All") return uniqueAllTech;
    if (activeTab === "Main")
      return coreStack.map((t) => ({ ...t, category: "Main" as const }));
    return allTech.filter((t) => t.category === activeTab);
  }, [activeTab, allTech, uniqueAllTech]);

  return (
    <section id="technologies" className={Styles.wrapper}>
      <div className={Styles.topRow}>
        {/* ── SKILLS & TECHNOLOGIES ── */}
        <div className={Styles.panel}>
          <div className={Styles.panelHeader}>
            <span className={Styles.headerIcon}>
              <GearIcon />
            </span>
            <h2 className={Styles.headerTitle}>Skills &amp; Technologies</h2>
          </div>

          <div className={Styles.tabRow}>
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`${Styles.tabButton} ${
                  activeTab === tab ? Styles.tabButtonActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={Styles.techGrid}>
            {filteredTech.map((item) => {
              const Icon = item.icon;
              return (
                <div className={Styles.techRow} key={item.name}>
                  <span
                    className={Styles.techIconBox}
                    style={{ ["--tech-color" as string]: item.color }}
                  >
                    <Icon />
                  </span>
                  <p className={Styles.techName}>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── EDUCATIONS ── */}
        <div className={Styles.panel}>
          <div className={Styles.panelHeader}>
            <span className={Styles.headerIcon}>
              <CapIcon />
            </span>
            <h2 className={Styles.headerTitle}>Educations</h2>
          </div>

          <div className={Styles.eduList}>
            {education.map((item, i) => (
              <div className={Styles.eduRow} key={`${item.school}-${i}`}>
                <span
                  className={Styles.eduAvatar}
                  style={{ backgroundColor: item.color ?? "#3adA1c" }}
                >
                  {item.school.charAt(0)}
                </span>
                <div className={Styles.eduInfo}>
                  <a className={Styles.eduSchool} href={item.link}>
                    {item.school}
                  </a>
                  <p className={Styles.eduMeta}>
                    {item.degree} <span className={Styles.dot}>·</span>{" "}
                    {item.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CERTIFICATIONS & ACHIEVEMENTS ── */}
      <div className={Styles.certPanel}>
        <div className={Styles.panelHeader}>
          <span className={Styles.headerIcon}>
            <MedalIcon />
          </span>
          <h2 className={Styles.headerTitle}>
            Certifications &amp; Achievements
          </h2>
        </div>

        <div className={Styles.certGrid}>
          {certifications.map((item, i) => (
            <button
              type="button"
              className={Styles.certCard}
              key={`${item.title}-${i}`}
              onClick={() => setActiveCert(item)}
            >
              <span className={Styles.certIconBox}>
                {item.kind === "achievement" ? <TrophyIcon /> : <RibbonIcon />}
              </span>
              <div className={Styles.certInfo}>
                <p className={Styles.certTitle}>{item.title}</p>
                <p className={Styles.certMeta}>
                  {item.issuer} <span className={Styles.dot}>·</span>{" "}
                  {item.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── CERTIFICATE IMAGE MODAL ── */}
      {activeCert && (
        <div
          className={Styles.modalOverlay}
          onClick={() => setActiveCert(null)}
        >
          <div
            className={Styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={Styles.modalClose}
              onClick={() => setActiveCert(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            {activeCert.image ? (
              <div className={Styles.modalImageWrap}>
                <Image
                  src={activeCert.image}
                  alt={activeCert.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 700px"
                  className={Styles.modalImage}
                />
              </div>
            ) : (
              <div className={Styles.modalNoImage}>
                <span className={Styles.certIconBox}>
                  {activeCert.kind === "achievement" ? (
                    <TrophyIcon />
                  ) : (
                    <RibbonIcon />
                  )}
                </span>
                <p>No image uploaded yet for this one.</p>
              </div>
            )}

            <div className={Styles.modalInfo}>
              <p className={Styles.modalTitle}>{activeCert.title}</p>
              <p className={Styles.modalMeta}>
                {activeCert.issuer} <span className={Styles.dot}>·</span>{" "}
                {activeCert.date}
              </p>
              {activeCert.credentialUrl && (
                <a
                  href={activeCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.modalLink}
                >
                  View credential ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ── inline icons (no extra deps) ── */

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="15" r="5" />
      <path d="m9 11-3-6M15 11l3-6M9 17l1.5 2M15 17l-1.5 2" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4" />
      <path d="M12 13v4M9 21h6M10 17h4v4h-4z" />
    </svg>
  );
}

function RibbonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="m9 12.5-1.5 8L12 18l4.5 2.5-1.5-8" />
    </svg>
  );
}
