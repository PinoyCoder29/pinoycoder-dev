import { FaBootstrap, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFastapi, SiMysql, SiPython } from "react-icons/si";

export const Projects = [
  {
    logo: "/project/logo/esignmo.png",
    title: "eSign Mo",
    image: "/project/projectImage/esignmo.png",
    subTitle: "Sign Language Translation System",
    path: "https://esignmo.vercel.app/main/asl",
    bgColor: "linear-gradient(135deg, #0f172a, #1e293b)",
    description:
      "A web-based system that enables communication between non-verbal/deaf individuals and verbal users through sign-to-text and speech-to-sign translation. It also includes learning and testing modules for improving sign language skills.",
    techStack: [
      {
        icon: RiNextjsFill,
        name: "Next.js",
        color: "#ffffff",
        bgColor: "#000000",
      },
      {
        icon: FaBootstrap,
        name: "Bootstrap",
        color: "#ffffff",
        bgColor: "#7952B3",
      },
      {
        icon: FaCss3Alt,
        name: "CSS3",
        color: "#ffffff",
        bgColor: "#2965F1",
      },
      {
        icon: SiFastapi,
        name: "FastAPI",
        color: "#ffffff",
        bgColor: "#009688",
      },
      {
        icon: SiPython,
        name: "Python",
        color: "#306998",
        bgColor: "#FFD43B",
      },
    ],
  },

  {
    logo: "",
    title: "LOMILINDOL",
    image: "/project/projectImage/lomilindol.png",
    subTitle:
      "LOMILINDOL - An Earthquake Monitoring System With Real Time Alerts",
    path: "/",
    bgColor: "linear-gradient(135deg, #111827, #0f766e)",
    description:
      "Awarded 3rd Place in the OpenIT Hackathon on November 20, 2025. LOMILINDOL is an Earthquake Monitoring Web Application powered by Tailwind CSS, React, Node.js, and MySQL. It allows the public to monitor live earthquake updates sourced via web scraping from PHIVOLCS.",
    techStack: [
      {
        icon: RiTailwindCssFill,
        name: "Tailwind CSS",
        color: "#ffffff",
        bgColor: "#06B6D4",
      },
      {
        icon: FaReact,
        name: "React",
        color: "#000000",
        bgColor: "#61DAFB",
      },
      {
        icon: FaNodeJs,
        name: "Node.js",
        color: "#ffffff",
        bgColor: "#339933",
      },
      {
        icon: SiExpress,
        name: "Express.js",
        color: "#ffffff",
        bgColor: "#000000",
      },
      {
        icon: SiMysql,
        name: "MySQL",
        color: "#ffffff",
        bgColor: "#4479A1",
      },
    ],
  },
];
