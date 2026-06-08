import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiFastapi, SiPython } from "react-icons/si";

export const Projects = [
  {
    logo: "/project/logo/esignmo.png",
    title: "eSign Mo",
    image: "/project/projectImage/esignmo.png",
    subTitle: "Sign Language Translation System",
    path: "https://esignmo.vercel.app/main/asl",
    description:
      "A web-based system that enables communication between non-verbal/deaf individuals and verbal users through sign-to-text and speech-to-sign translation. It also includes learning and testing modules for improving sign language skills.",
    techStack: [
      { icon: RiNextjsFill, name: "Next.js", color: "#000000" },
      { icon: FaBootstrap, name: "Bootstrap", color: "#c013cf7c" },
      { icon: FaCss3Alt, name: "CSS3", color: "#2965f1" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
    ],
  },
];
