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
    const sections = document.querySelectorAll("article[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 },
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
