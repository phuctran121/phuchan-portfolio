import vanlang from "@/assets/vanlang_university.png";
import connectly from "@/assets/connectly.png";
import portfolio from "@/assets/portfolio.png";
import { Project } from "@/types/project.types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Social Media Platform",
    category: "React Application",
    image: connectly,
    video:
      "https://res.cloudinary.com/dm7nojb8g/video/upload/v1749237709/vvz1oynfxhcfndh5nstl.mp4",
    description:
      "Social networking platform that enables users to connect, interact, chat and share content in real time. Utilized MongoDB for data storage, NodeJS for a RESTful API backend, and ReactJS for the frontend; used Socket.io for real-time chat & notifications, Redux Toolkit and TanStack Query for global state management and efficient data fetching.",
    demoLink: "https://connectly-social-network-app.onrender.com/",
    githubLink: "https://github.com/phuctran121/connectly-social-network-app",
  },
  {
    id: 2,
    title: "Student's Scientific Research Projects Management",
    category: "React Application",
    image: vanlang,
    video:
      "https://res.cloudinary.com/dm7nojb8g/video/upload/v1749237709/xowyo5gyoih0hh9lydzv.mp4",
    description:
      "Supporting students with processes from the stage of registering a scientific research topic to the registration rounds, the stage of writing an outline to approve the topic, and the implementation stage of researching and reporting on research topics. Implemented PostgreSQL for structured relational data storage, NodeJS for a RESTful API backend, and ReactJS for the user interface; used Socket.io for real-time updates.",
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/username/project",
  },
  {
    id: 3,
    title: "Modern Personal Portfolio",
    category: "Next Application",
    image: portfolio,
    video:
      "https://res.cloudinary.com/dm7nojb8g/video/upload/v1749235616/izzqredro5mufgmt8mdb.mp4",
    description:
      "Modern personal portfolio website to showcase projects, professional skills and experience with a modern, animated UI. Built with NextJS for server-side rendering and optimized performance, used Framer Motion for smooth UI animations, and applied Redux Toolkit for global state management and theme handling.",
    demoLink: "https://phuchan-portfolio.vercel.app/",
    githubLink: "https://github.com/phuctran121/phuchan-portfolio",
  },
];
