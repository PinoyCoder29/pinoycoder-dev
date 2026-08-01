"use client";

import { useEffect, useState } from "react";
import MainHeader from "@/components/layout/MainHeader/page";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { ProjectSidebarDetails } from "@/config/navigation/projectSidebarDetails";

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Must match the hash format used in ProjectSidebarDetails' `path`
  // ("#overview"), not a route-style "/projects/overview" — these are
  // in-page anchors, not real pages.
  const [activeSection, setActiveSection] = useState(
    ProjectSidebarDetails[0].path,
  );

  useEffect(() => {
    // Array.from + querySelectorAll preserves real document order
    // (top-to-bottom, left-to-right within a row) — this is what we use
    // to break ties, not the order the observer happens to report.
    const sections = Array.from(document.querySelectorAll("article[id]"));

    // Track which sections are currently crossing the trigger line.
    // IntersectionObserver callbacks only include entries that changed
    // since the last firing, so we keep this updated incrementally
    // rather than trusting any single callback's entries alone.
    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        });

        // Among everything currently crossing the trigger line, the one
        // that comes first in real DOM order wins. This stays stable
        // even right after a refresh, while images/fonts are still
        // settling and ratios would otherwise briefly fluctuate.
        const firstVisible = sections.find((section) =>
          intersecting.has(section.id),
        );

        if (firstVisible) {
          setActiveSection(`#${firstVisible.id}`);
        }
      },
      // A thin trigger line near the top of the viewport (roughly the
      // 15%–25% mark) instead of comparing visible area. A section
      // becomes active the moment its top crosses this line — much
      // less sensitive to layout shifts than ratio comparisons.
      { rootMargin: "-15% 0px -75% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Sidebar
        links={ProjectSidebarDetails}
        activeLink={activeSection}
        onLinkClick={setActiveSection}
      />

      <main>{children}</main>
    </>
  );
}
