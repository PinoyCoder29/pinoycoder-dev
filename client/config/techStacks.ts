import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";

import { RiNextjsFill } from "react-icons/ri";

import { SiExpress, SiPostgresql, SiMysql, SiFastapi } from "react-icons/si";

// 🔥 FULL STACK
export const techStacks = [
  { name: "Next.js", icon: RiNextjsFill, color: "#ffffff" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

// 🎨 FRONTEND STACK
export const FrontEndStacks = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Next.js", icon: RiNextjsFill, color: "#ffffff" },
];

// 🗄️ DATABASE
export const Database = [
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

// ⚙️ BACKEND STACK
export const Backend = [
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
];
