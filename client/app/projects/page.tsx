"use client";

import { useEffect, useState } from "react";
import ProjectSection from "@/components/sections/ProjectSection/page";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { ProjectSidebarLinks } from "@/config/navigation/projectSidebarLink";
import MainHeader from "@/components/layout/MainHeader/page";

export default function Project() {
  const [activeSection, setActiveSection] = useState(
    ProjectSidebarLinks[0].path, // ✅ tugma na sa format ng link.path
  );

  useEffect(() => {
    const sections = document.querySelectorAll("article[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`/projects/${entry.target.id}`); // ✅ tugma na rin
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
      <MainHeader />
      <Sidebar
        links={ProjectSidebarLinks}
        activeLink={activeSection}
        onLinkClick={setActiveSection}
      />

      <ProjectSection />
    </>
  );
}
