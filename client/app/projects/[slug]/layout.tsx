"use client";

import { useEffect, useState } from "react";
import MainHeader from "@/components/layout/MainHeader/page";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { ProjectSidebarLinks } from "@/config/navigation/projectSidebarLink";

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState(
    `/${ProjectSidebarLinks[0].name}`,
  );

  useEffect(() => {
    const sections = document.querySelectorAll("article[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`/${entry.target.id}`);
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
        links={ProjectSidebarLinks}
        activeLink={activeSection}
        onLinkClick={setActiveSection}
      />

      <main>{children}</main>
    </>
  );
}
