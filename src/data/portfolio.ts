/**
 * Portfolio Data Configuration for Arthur Lubowa Shalom
 * 
 * To customize any detail, simply edit the values below or use the
 * in-browser "Edit Portfolio" modal in the website.
 */

export interface EducationEntry {
  id: string;
  institution: string;
  qualificationOrLevel: string;
  period: string;
  statusBadge?: string;
  details?: string;
  location?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: Array<{
    name: string;
    note?: string;
  }>;
}

export interface PortfolioData {
  fullName: string;
  headline: string;
  avatarUrl: string;
  status: string;
  heroIntro: string;
  about: {
    summary: string;
    focusAreas: Array<{
      title: string;
      description: string;
    }>;
  };
  skills: {
    technical: SkillCategory;
    personal: SkillCategory;
  };
  education: EducationEntry[];
  goals: {
    statement: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    email: string;
    githubUsername: string; // If empty or placeholder, hidden according to instructions
    linkedinUsername: string; // If empty, hidden
    location: string;
    note: string;
  };
  footerNote: string;
}

import arthurPhoto from '../assets/images/arthur_shalom.jpg';

export const initialPortfolioData: PortfolioData = {
  fullName: "Arthur Lubowa Shalom",
  headline: "First-Year University Student | Aspiring Technology Professional",
  avatarUrl: arthurPhoto,
  status: "Undergraduate Student · Uganda Christian University",
  heroIntro:
    "Welcome to my personal portfolio. I am a first-year university student developing my knowledge, skills, and interests in technology and computing. This website introduces my background, current skills, education, and aspirations as I continue learning and growing.",
  about: {
    summary:
      "I am a curious and motivated first-year university student who enjoys learning, solving problems, exploring technology, and developing practical skills. My focus is on establishing a solid foundation in computing and analytical thinking. I place deep importance on continuous learning, effective collaboration in teams, open communication, and sustained personal growth as I navigate my academic journey.",
    focusAreas: [
      {
        title: "Continuous Learning",
        description:
          "Consistently exploring core computing, programming concepts, and data methods with curiosity and discipline.",
      },
      {
        title: "Teamwork & Collaboration",
        description:
          "Engaging constructively in academic group tasks, listening to diverse perspectives, and supporting team goals.",
      },
      {
        title: "Problem-Solving",
        description:
          "Approaching logical and mathematical problems with patience, structured thinking, and analytical attention to detail.",
      },
      {
        title: "Clear Communication",
        description:
          "Communicating ideas clearly in both written work and discussions, maintaining open feedback with peers and mentors.",
      },
    ],
  },
  skills: {
    technical: {
      title: "Technical Skills",
      description:
        "Practical tools and programming concepts I am actively learning, applying in coursework, and developing.",
      items: [
        {
          name: "Python fundamentals and introductory data analysis using pandas",
          note: "Syntax, data structures, series and dataframe manipulation",
        },
        {
          name: "Data visualisation with Matplotlib and Seaborn",
          note: "Creating charts, distributions, and exploratory visual plots",
        },
        {
          name: "HTML and CSS",
          note: "Semantic page structures, responsive layouts, and styling",
        },
        {
          name: "Basic JavaScript",
          note: "Foundational scripting and dynamic web interactions",
        },
        {
          name: "Microsoft Word and Excel",
          note: "Document formatting, spreadsheets, and tabular data organization",
        },
        {
          name: "Internet research and AI-assisted productivity tools",
          note: "Information synthesis, conceptual clarification, and study workflows",
        },
      ],
    },
    personal: {
      title: "Personal Skills",
      description:
        "Core interpersonal and work habits demonstrated across academic projects and daily learning.",
      items: [
        {
          name: "Communication",
          note: "Active listening and clear articulation of ideas in academic settings",
        },
        {
          name: "Teamwork and collaboration",
          note: "Cooperating respectfully with peers during group assignments and discussions",
        },
        {
          name: "Problem-solving",
          note: "Breaking down tasks into manageable steps and finding practical resolutions",
        },
        {
          name: "Time management",
          note: "Balancing university lectures, personal study, and coursework deadlines",
        },
        {
          name: "Willingness to learn",
          note: "Receptiveness to constructive feedback and enthusiasm for unfamiliar topics",
        },
      ],
    },
  },
  education: [
    {
      id: "ucu-degree",
      institution: "Uganda Christian University",
      qualificationOrLevel: "Bachelor of Science in Data Science and Analytics",
      period: "Current",
      statusBadge: "First Year, Semester 1",
      details:
        "Building core foundations in computing fundamentals, mathematical analysis, and data literacy.",
      location: "Mukono, Uganda",
    },
    {
      id: "light-academy",
      institution: "Light Academy Secondary School",
      qualificationOrLevel: "Secondary Education",
      period: "2024–2025",
      details: "Completed advanced secondary school studies.",
      location: "Kampala, Uganda",
    },
    {
      id: "mengo-senior",
      institution: "Mengo Senior School",
      qualificationOrLevel: "Secondary Education",
      period: "2019–2023",
      details: "Completed lower secondary school education.",
      location: "Kampala, Uganda",
    },
  ],
  goals: {
    statement:
      "My current goal is to strengthen my academic foundation, improve my programming and data analysis skills, gain practical experience through coursework, and gradually build a collection of projects.",
    pillars: [
      {
        title: "Strengthen Academic Foundation",
        description:
          "Consistently perform well in first-year university modules, mastering essential mathematical, statistical, and computing principles.",
      },
      {
        title: "Improve Programming & Data Skills",
        description:
          "Deepen hands-on fluency in Python, pandas, and data manipulation through structured practice exercises and lab sessions.",
      },
      {
        title: "Gain Practical Experience",
        description:
          "Apply classroom theories directly to real-world datasets and guided assignments assigned by university lecturers.",
      },
      {
        title: "Build a Project Collection",
        description:
          "Gradually create well-documented starter repositories demonstrating honest, independent learning as my coursework advances.",
      },
    ],
  },
  contact: {
    email: "arthurshalomz81@gmail.com",
    githubUsername: "", // Hidden if blank as per instructions
    linkedinUsername: "", // Hidden if blank
    location: "Uganda",
    note:
      "Feel free to reach out via email for academic inquiries, peer study collaborations, or student discussions.",
  },
  footerNote: "© 2026 Arthur Lubowa Shalom. Personal Portfolio.",
};
