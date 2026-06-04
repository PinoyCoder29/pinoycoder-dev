import { BiLogoVisualStudio } from "react-icons/bi";
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPython,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiVercel,
  SiHuggingface,
  SiCloudinary,
  SiTensorflow,
  SiPytorch,
  SiMediapipe,
  SiKdeneon,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiPostgresql, SiMysql, SiFastapi } from "react-icons/si";

//  FULL STACK
export const techStacks = [
  { name: "Next.js", icon: RiNextjsFill, color: "#ffffff" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

//  FRONTEND STACK
export const FrontEndStacks = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Next.js", icon: RiNextjsFill, color: "#ffffff" },
];

//  DATABASE
export const Database = [
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

//  BACKEND STACK
export const Backend = [
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
];

//  DEPLOYMENT
export const Deployment = [
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
  { name: "Neon", icon: SiKdeneon, color: "#00E599" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
];

//  AI MODELS
export const AIModels = [
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "MediaPipe", icon: SiMediapipe, color: "#00BCD4" },
  { name: "GRU", icon: FaPython, color: "#3776AB" },
  { name: "MobileNetV2", icon: FaPython, color: "#3776AB" },
];

//  TOOLS
export const Tools = [
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
];
