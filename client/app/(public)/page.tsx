"use client";

import { useEffect, useState } from "react";

import { sidebarLinks } from "@/config/sidebarLinks";

import AboutSection from "@/components/sections/AboutSection/page";
import HomeSection from "@/components/sections/HomeSection/page";
import Technologies from "@/components/sections/TechnologySection/page";
import Sidebar from "@/components/layout/Sidebar/Sidebar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Sidebar
        links={sidebarLinks}
        activeLink={activeSection}
        onLinkClick={setActiveSection}
      />

      <HomeSection />
      <AboutSection />
      <Technologies />
    </>
  );
}
