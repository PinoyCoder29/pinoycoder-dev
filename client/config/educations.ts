export interface EducationItem {
  school: string;
  degree: string;
  duration: string;
  /** Accent color for the avatar badge, e.g. "#3adA1c" */
  color?: string;
}

export const education: EducationItem[] = [
  {
    school: "Guis Guis Talon Main Elementary School",
    degree: "Elementary",
    duration: "2010 - 2016",
    color: "#4c6ef5",
  },
  {
    school: "Lutucan Integrated National Highschool",
    degree: "CSS - ICT",
    duration: "2016 - 2022",
    color: "#f59f00",
  },
  {
    school: "Colegio De Santo Cristo De Burgos",
    degree: "B.S Information Technology",
    duration: "2022 - 2026",
    color: "#e03131",
  },
];
