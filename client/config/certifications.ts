export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  /** "achievement" gets a trophy icon, "certificate" gets a ribbon icon */
  kind: "achievement" | "certificate";
  /** Path to the certificate/achievement image, e.g. "/certs/react-completion.png" */
  image?: string;
  credentialUrl?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Open IT Hackathon 3rd Place",
    issuer: "Open IT",
    date: "Nov 8-9 ,2025",
    kind: "achievement",
    image: "/certificate/hackathon2025.jpg",
  },
  {
    title: "Participate in DTI",
    issuer: "DTI",
    date: "2025",
    kind: "certificate",
    image: "/certificate/dti.jpg",
  },
  {
    title: "Certification of Completion - Python 1",
    issuer: "Cisco Networking Academy",
    date: "2025",
    kind: "certificate",
    image: "/certificate/python.png",
  },
  {
    title: "Certification of Completion - Javascript",
    issuer: "Cisco Networking Academy",
    date: "2025",
    kind: "certificate",
    image: "/certificate/javascript.png",
  },
];
