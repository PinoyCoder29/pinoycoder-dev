import { IconType } from "react-icons";

export interface Project {
  slug: string;

  hero: {
    logo?: string;
    title: string;
    subtitle: string;
    image: string;
    path?: string;
    github?: string;
    bgColor: string;

    status: string;
    role: string;
    duration: string;
    type: string;
  };

  summary: {
    description: string;
  };

  context: {
    background: string;
    problem: string;
    goal: string;
    users: string[];
  };

  responsibilities: string[];

  systemDesign: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
    other?: string[];
  };

  engineeringDecisions: {
    title: string;
    reason: string;
  }[];

  developmentProcess: {
    title: string;
    description: string;
  }[];

  features: {
    title: string;
    description: string;
  }[];

  technicalChallenges: {
    challenge: string;
    analysis: string;
    solution: string;
    impact: string;
  }[];

  optimizations: {
    title: string;
    description: string;
  }[];

  lessonsLearned: string[];

  outcome: {
    deployment?: string;
    achievements: string[];
  };

  roadmap: string[];

  techStack: {
    icon: IconType;
    name: string;
    color: string;
    bgColor: string;
  }[];

  reflection: string;
}
