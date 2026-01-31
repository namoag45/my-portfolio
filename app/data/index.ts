export const navItems = [
  { name: "About", link: "#about" },
  { name: "CaseStudies", link: "#CaseStudies"},
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
  { name: "Responsibilities", link: "#responsibilities" },
  { name: "Contact", link: "#contact" },
];

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: " AI-Powered Trip Itinerary Generator",
    des: "This is a full-stack AI-based trip planner that generates a personalized travel itinerary based on your inputs like destination, number of days, people traveling, and budget.",
    img: "trip-planner.png",
    iconLists: ["/icons/langchain.svg", "/icons/openai.svg", "/icons/qdrant.svg", "/icons/ai.svg"],
    link: "https://github.com/namoag45/ai-trip-itinerary-generator",
    liveLink: "https://ai-trip-itinerary-generator.vercel.app/"
  },
  // {
  //   id: 2,
  //   title: "PG Discovery & Booking Platform for Students",
  //   des: " Help students discover PGs near their college through location-based search, reducing browsing time by 70%",
  //   img: "/stay-near.png",
  //   iconLists: ["/icons/react.svg", "/icons/prisma.svg", "/icons/postgresql.svg"],
  //   liveLink: "https://stay-near.vercel.app/"
  // },
  // {
  //   id: 4,
  //   title: "Portfolio Website",
  //   des: "Personal portfolio website built with Next.js, TailwindCSS, and Aceternity UI for a sleek, responsive design.",
  //   img: "/portfolio.png",
  //   iconLists: ["/icons/nextjs.svg", "/icons/tailwindcss.svg", "/icons/aceternity.svg"],
  //   link: "https://github.com/Suhani2205/my-portfolio",
  //   liveLink: "https://my-portfolio-blue-one-80.vercel.app/"
  // }
];

// case studies
export interface CaseStudy {
  id: number;
  title: string;
  des: string;
  img: string;
  liveLink?: string;
}

export const CaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "UBER- Feature gaps in user journey and solutions to boost retention & experience.",
    des: "Analyzed Uber’s end-to-end user journey, highlighting feature gaps such as broken calendar sync, poor location access prompts, and lack of fallback in “Finding Driver” flow.",
    img: "uber.png",
    liveLink: "https://drive.google.com/file/d/1di7Hs4WNfOjIHSjscy9xZO7M9bcgWItX/view"
  },
  {
    id: 2,
    title: "ZOMATO– Performance Intelligence Dashboard for Restaurant Partners",
    des: "Developed a Performance Intelligence Dashboard for Zomato restaurant partners, providing real-time insights, A/B testing, and competitor benchmarking. Enabled data-driven decisions that boosted partner retention by 10–12% and revenue by 8–10%.",
    img: "zomato.png",
    liveLink: "https://drive.google.com/file/d/198ZH-7EqjfDnyvDnlKzJBsxm6h491p9P/view"
  },
  // {
  //   id: 2,
  //   title: " Counselling and Guidance Cell- Onboarding & mentorship redefined.",
  //   des: "Led a 50-member team (6 associate coordinators, 44 mentors) to design and execute a month-long Orientation & Induction Programme for 600+ freshers.",
  //   img: "/c_cell.png",
  //   liveLink: "https://drive.google.com/file/d/1wXiAkpjuHPJS646v_Nn61yDBwOKJg5eG/view"
  // },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url:"https://github.com/namoag45"
  },
  {
    id: 2,
    img: "/link1.svg",
    url:"https://www.linkedin.com/in/naman-agarwal-57a519218/"
    
  },
];

// Education Section Data
export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export const educationData: EducationItem[] = [
  {
    institution: "The LNM Institute of Information Technology, Jaipur",
    degree: "B.Tech in Communication and Computer Engineering",
    year: "2022 – 2026",
  },
  {
    institution: "Central Academy Sr. Sec. School",
    degree: "Class XII",
    year: "2020 – 2021",
  },
  // {
  //   institution: "Cambridge Court High School, Jaipur",
  //   degree: "Class X – CBSE",
  //   year: "2019 – 2020",
  // },
];

// Responsibilities Section Data
export interface Responsibility {
  role: string;
  org: string;
  duration: string;
  details: string[];
}

export const responsibilities: Responsibility[] = [
  {
    role: "Product Analyst Intern",
    org: "ProcMart",
    duration: "Jan 2026 – Present",
    details: [
      "Drafted detailed Product Requirement Documents (PRDs) for an AI-based product and vendor recommendation tool, aligning enhancements with core business needs.",
      "Improved marketplace efficiency by reducing SKU duplication by 12% and increasing requirement postings by KAMs by 20%, contributing to a 6% margin improvement.",
      "Worked directly with databases and data extracts to analyze business-critical information and support product optimization initiatives."
    ],
  },

  {
    role: "Project Management Intern",
    org: "Grapes Worldwide",
    duration: "Oct 2025 – Dec 2025",
    details: [
      "Managed end-to-end client projects by gathering requirements, defining scope, coordinating cross-functional teams, and ensuring timely, high-quality delivery across all phases of the project lifecycle.",
      "Led client discussions to understand business needs, translated them into actionable tasks, and aligned stakeholders with technical teams.",
      "Tracked project execution using SDLC practices, resolved blockers, maintained documentation, and supported senior leadership with reporting and workflow optimization."
    ],
  },
  {
    role: "Sponsorship and Operations Head, TEDxLNMIIT’25",
    org: "LNMIIT",
    duration: "Aug 2024 – Jan 2025",
    details: [
      "Directed on-ground operations, managing event flow, stalls, and overall audience experience.",
      "Led sponsorship drive, securing an EdTech partner and boosting event funding."
    ],
  },
  {
    role: " Coordinator, Counselling and Guidance Cell",
    org: "LNMIIT",
    duration: "Apr 2024 – Mar 2025",
    details: [
      "Trained 40+ mentors and onboarded 600+ freshmen by managing Orientation & Induction programs.",
      "Organized support initiatives and mentorship sessions, ensuring smooth transition for new students."
    ],
  },
  // {
  //   role: "Coordinator, Media Cell LNMIIT",
  //   org: "LNMIIT",
  //   duration: "Mar 2024 – Mar 2025",
  //   details: [
  //     "Managed communications, social media strategy, and event promotion.",
  //     "Led 60+ volunteers handling media coverage for campus events."
  //   ],
  // },
];

// Skills Section Data
export interface Technology {
  name: string;
}

export interface SkillCardProps {
  category: string;
  skills: Technology[];
  index: number;
}

export interface SkillCategory {
  id: number;
  category: string;
  technologies: Technology[];
}

export const skills: SkillCategory[] = [
  {
    id: 1,
    category: "Project Management Tools",
    technologies: [
      { name: "Jira" },
      { name: "Confluence" },
    ]
  },
  {
    id: 2,
    category: "Product Analytics Tool",
    technologies: [
      { name: "MoEngage" },
      { name: "Metabase" },
    ]
  },
  {
    id: 3,
    category: "Data Analytics Tool",
    technologies: [
      { name: "SQL" },
      { name: "Advance Excel" },
      { name: "Power BI" },
    ]
  },
  {
    id: 4,
    category: "Design Tool",
    technologies: [
      { name: "Figma" },
      { name: "Canva" },
    ]
  },
  {
    id: 5,
    category: "Technical Skills",
    technologies: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "MERN Stack" },
      { name: "Github" },
      { name: "DSA" },
    ]
  },
  {
    id: 6,
    category: "Other Skills",
    technologies: [
      { name: "Stakeholder Management" },
      { name: "Wireframing" },
      { name: "Cross Functional Collaboration" },
      { name: "Systems Thinking" },
      { name: "Prioritization" },
      { name: "Communication"}
    ]
  }
];
