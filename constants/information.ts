import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiMongodb, SiRedux, SiTailwindcss, SiFramer } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import vanlang from "@/assets/vanlang_university.png";
import avatar from "@/assets/avatar.png";
import { Skill, Introduction, Education } from "@/types/information.types";
import {
  FaBook,
  FaPlane,
  FaRunning,
  FaMusic,
  FaHandsHelping,
  FaCameraRetro,
  FaFigma,
} from "react-icons/fa";

function calculateAge(birthdate: string): string {
  const [day, month, year] = birthdate
    .split("/")
    .map((x) => parseInt(x.trim()));
  const birth = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return `${age} years old`;
}

export const skillsData: Skill[] = [
  {
    category: "Software & Website Development",
    description:
      "I specialize in developing dynamic websites and software applications, enhancing performance across all platforms.",
    tools: [
      {
        id: 1,
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        id: 2,
        name: "Node.js",
        icon: IoLogoNodejs,
        color: "#339933",
      },
      {
        id: 3,
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "#E0E0E0",
      },

      {
        id: 4,
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        id: 5,
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },

      {
        id: 6,
        name: "Redux",
        icon: SiRedux,
        color: "#A882FF",
      },
      {
        id: 7,
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
    ],
  },
  {
    category: "UI/UX & Graphic Design",
    description:
      "I create visually compelling and user-friendly designs, enhancing the overall user experience with attention to detail.",
    tools: [
      {
        id: 1,
        name: "Figma",
        icon: FaFigma,
        color: "#F24E1E",
      },
      {
        id: 2,
        name: "Framer",
        icon: SiFramer,
        color: "#FFFFFF",
      },
    ],
  },
];

export const educationData: Education[] = [
  {
    school: "Van Lang University",
    level: "Bachelor of Software Engineering | Education program",
    description:
      "Courses:  Networks and Cloud Computing, Object Oriented Programming, Software Architecture and design, Algorithms and Data Structures, Website Design, Databases, Intro to Software Engineering, Project Management.",
    image: vanlang,
  },
  {
    school: "Van Lang University",
    level: "Bachelor of Software Engineering | Education program",
    description:
      "Courses:  Networks and Cloud Computing, Object Oriented Programming, Software Architecture and design, Algorithms and Data Structures, Website Design, Databases, Intro to Software Engineering, Project Management.",
    image: vanlang,
  },
];

export const introductionData: Introduction = {
  image: avatar,
  name: "Tran Hoang Phuc",
  roles: ["Full-Stack Developer", "UI/UX Designer"],
  bio: `Developer with strong English reading skills and conversational communication ability. Solid background in Software Engineering, experienced in web development, databases, and UI/UX design. Proficient in JavaScript, Typescript, React.js and Node.js. Eager to grow as a Full-stack Developer in a dynamic environment.`,
  personalDetails: {
    age: calculateAge("12 / 01 / 2004"),
    birthdate: "12 / 01 / 2004",
    phone: "0933190155",
    email: "phuctran058@gmail.com",
    address: "Go Vap, Ho Chi Minh City",
  },
  interests: [
    {
      id: 1,
      name: "Reading",
      icon: FaBook,
      color: "#FFD580", // vàng nhạt dễ chịu
    },
    {
      id: 2,
      name: "Travelling",
      icon: FaPlane,
      color: "#74C0FC", // xanh dương pastel
    },
    {
      id: 3,
      name: "Sport",
      icon: FaRunning,
      color: "#FF7675", // đỏ cam pastel
    },
    {
      id: 4,
      name: "Music",
      icon: FaMusic,
      color: "#A29BFE", // tím nhạt, dịu mắt
    },
    {
      id: 5,
      name: "Volunteering",
      icon: FaHandsHelping,
      color: "#81ECEC", // xanh mint tươi sáng
    },
    {
      id: 6,
      name: "Photograph",
      icon: FaCameraRetro,
      color: "#CCCCCC", // xám sáng, sang trọng trên nền đen
    },
  ],
};
