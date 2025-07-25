import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaPhone,FaTwitter } from "react-icons/fa";

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/nikhilchauhanx", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/nickonindia", icon: FaLinkedin },
  { name: "X", url: "https://x.com/nickonindia", icon: FaTwitter },
  { name: "Instagram", href: "https://instagram.com/nickonindia", icon: FaInstagram },
  { name: "YouTube", href: "https://www.youtube.com/@nickonindia", icon: FaYoutube },
  { name: "Email", href: "mailto:nikhilchauhan0618@gmail.com", icon: FaEnvelope },
  { name: "Phone", href: "tel:+917290813007", icon: FaPhone },
];

export const professionalSummary = "Full Stack Developer skilled in React.js, Node.js, and MongoDB with a solid foundation in JavaScript and web architecture. Transitioned from test automation to development. Delivered 5+ real-world projects and solved 100+ DSA problems. Passionate about performance, clean code, and scalable systems.";

export const technicalSkills = {
  "Languages": ["JavaScript", "TypeScript (basic)", "HTML", "CSS"],
  "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "Next.js"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "Docker", "Vercel", "Netlify"],
  "Core Concepts": ["REST APIs", "JWT Auth", "MVC Architecture", "CRUD Operations", "Async/Await"],
  "Deployment": ["GitHub Actions", "Railway", "Heroku"],
};

export const projects = [
  {
    title: "Yoga Teacher Platform",
    stack: "MERN Stack (MongoDB, Express, React, Node.js)",
    description: "A full-featured booking system connecting students with yoga instructors, featuring user authentication, role-based dashboards, and a verification system for teachers.",
    liveUrl: "#", // Add live link here
    repoUrl: "#", // Add repo link here
  },
  {
    title: "Xenzy Thrift Store",
    stack: "Next.js, MongoDB, Tailwind CSS",
    description: "An e-commerce platform with a dedicated admin panel for product management, secure user login, and cloud-based image uploads.",
    liveUrl: "#", // Add live link here
    repoUrl: "#", // Add repo link here
  },
  {
    title: "Real-Time Chat App",
    stack: "React, Node.js, Socket.io, JWT",
    description: "A dynamic chat application supporting group and private messaging, built with WebSockets for real-time communication and JWT for secure user sessions.",
    liveUrl: "#", // Add live link here
    repoUrl: "#", // Add repo link here
  },
];

export const experience = [
  {
    role: "Automation Engineer",
    company: "Cognizant",
    duration: "Dec 2021 – May 2024",
    project: "Project: HUMANA – US Healthcare Client",
    description: "Worked within an Agile framework to design, build, and maintain automated testing systems using C# and .NET, resulting in a significant reduction in manual testing hours and improved release quality."
  }
];

export const education = {
  degree: "B.Tech – Information Technology",
  institution: "Amity University, Noida",
  duration: "2017 - 2021"
};

export const certifications = [
  "The Complete Full Stack Web Developer Bootcamp (Udemy)",
  "JavaScript: The Advanced Concepts (Zero to Mastery)",
  "MongoDB for Developers: A Complete Guide (MongoDB University)",
];

export const achievements = [
  "Effective communicator and collaborative team player.",
  "Consistently contributed to open source with 150+ GitHub commits in 3 months.",
  "Solved 100+ algorithmic problems on LeetCode, enhancing problem-solving skills.",
];