export interface EducationItem {
  school: string;
  degree: string;
  duration: string;
  /** Accent color for the avatar badge, e.g. "#3adA1c" */
  link?: string;
  color?: string;
}

export const education: EducationItem[] = [
  {
    school: "Guis Guis Talon Main Elementary School",
    link: "https://www.google.com/maps/place/Guisguis+Talon+Main+Elementary+School/@13.8682474,121.4981968,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd37eb63989ee1:0xe7388f78a0d77014!8m2!3d13.8682422!4d121.5007717!16s%2Fg%2F11qg385c67?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",

    degree: "Elementary",
    duration: "2010 - 2016",
    color: "#4c6ef5",
  },
  {
    school: "Lutucan Integrated National Highschool",

    link: "https://www.google.com/maps/place/Lutucan+Integrated+National+High+School/@13.9075522,121.4868117,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd484d551e12cf:0x501b4b7434d4c52a!8m2!3d13.907547!4d121.4914251!16s%2Fg%2F1tvq1n6w?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
    degree: "CSS - ICT",
    duration: "2016 - 2022",
    color: "#f59f00",
  },
  {
    school: "Colegio De Santo Cristo De Burgos",
    degree: "B.S Information Technology",
    link: "https://www.google.com/maps/place/Colegio+de+Santo+Cristo+de+Burgos/@13.9473654,121.489104,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd49f101f39c03:0x3ba7d7dcd8ef51d7!8m2!3d13.9473602!4d121.4916789!16s%2Fg%2F11gjsssm20?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
    duration: "2022 - 2026",
    color: "#e03131",
  },
];
