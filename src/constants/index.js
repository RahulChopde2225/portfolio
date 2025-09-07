import { Link } from "react-router-dom";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SQL",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bachelor of Technology",
    company_name: "CSMSS Chh. Shahu College Of Engineering",
    icon: tesla, // you can put a logo here if you want, else leave empty
    iconBg: "#383E56",
    date: "2021 - 2025",
    points: [
      "Stream: Electronics And Computer Engineering",
      "Year of Passing: 2025.",
      "CGPA: 7.5/10",
    ],
  },
  {
    title: "12th Standard (HSC)",
    company_name: "Nutan High School Vavna",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "2019 - 2021",
    points: [
      "Stream: PCMB (Physics, Chemistry, Mathematics,Biology)",
      "Year of Passing: 2021.",
      "Percentage: 81.20%.",
    ],
  },
  {
    title: "10th Standard (SSC)",
    company_name: "Jogeshwari High School Palshi",
    icon: meta,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Year of Passing: 2019.",
      "Percentage: 81.40%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Connect with me on LinkedIn to explore my professional journey, projects, and skills.",
    name: "LinkedIn",
    designation: "LinkedIn Profile",
    company: "Open to Opportunities",
    image: "data:image/png;base64,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",
    link: "https://www.linkedin.com/in/rahulchopde/",
  },
  {
    testimonial:
      "Check out my GitHub for coding projects including My all projects.",    
    name: "GitHub",
    designation: "GitHub",
    company: "Open Source Contributions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQRdhYjGRBRadNoiJfrD3r9oK8oIMqVBuLI-xAwf-XMjd_qx4ra7c8hj7ArtGdZiZN0A&usqp=CAU",
    link: "https://github.com/RahulChopde2225/",
  },
  {
    testimonial:
      "Explore my skills, education, and experience — Go through my resume.",
    name: "Resume",
    designation: "Resume",
    company: "Career Profile",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrsPvrviMwyTm9aHDnNAA4kEV2pceF8COgw&s",
    link: "https://drive.google.com/file/d/12X4clZpjhPN-uniCPaNXIHgUjg5ckIRY/view?usp=drivesdk/",
  },
];

const projects = [
  {
    name: "Hospital Management System",
    description:
      "Full-stack hospital management system with patient records, appointments, staff, and billing. Final-year project..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Html,Css",
        color: "black-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Personal 3D Portfolio",
    description:
      "3D interactive portfolio built using React Three Fiber, Tailwind CSS, and modern UI/UX practices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "modern UI/UX with animations",
        color: "green-text-gradient",
      },
      {
        name: "Html,css",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "white-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations."
      
      
      ,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
