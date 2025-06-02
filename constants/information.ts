import { FaReact, FaMusic } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import vanlang from "@/assets/vanlang_university.png";
import { Skill, Introduction, Education } from "@/types/information.types";

export const skillsData: Skill[] = [
  {
    category: "Software & Website Development",
    description:
      "I specialize in developing dynamic websites and software applications, enhancing performance across all platforms.",
    tools: [
      {
        id: 1,
        name: "React",
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
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        id: 4,
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        id: 5,
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "#FFFFFF",
      },
      {
        id: 5,
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "#FFFFFF",
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
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        id: 2,
        name: "Node.js",
        icon: IoLogoNodejs,
        color: "#339933",
      },
    ],
  },
];

export const educationData: Education[] = [
  {
    school: "Southern Philippines Baptist Theological Seminary",
    level: "High School Level",
    description:
      "SPBTS is dedicated to teaching God's word, equipping God's servants, and sending God's laborers. A private educational institution located in Puan, Davao City, who began holding Bible studies in her home in 1953.",
    image: vanlang,
  },
  {
    school: "University of the Immaculate Conception",
    level: "Senior High School Level",
    description:
      "UIC has accepted the challenge to lead in humanistic, science, and technology education. It aims to form competent, socially responsible professionals guided by a strong Christian orientation and the living out of its mission of human development.",
    image: vanlang,
  },
];

export const introductionData: Introduction = {
  image: vanlang,
  name: "Tran Hoang Phuc",
  roles: ["Full-Stack Developer", "UI/UX Designer"],
  bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae,
      est ab optio voluptate sint ipsa culpa. Natus, magnam reprehenderit.
      Unde in beatae aut cum corrupti alias reprehenderit, culpa labore!
      Unde in beatae aut cum corrupti alias reprehenderit, culpa labore!`,
  personalDetails: {
    age: "20 years old",
    birthdate: "12 / 01 / 2004",
    phone: "0933190155",
    email: "phuctran058@gmail.com",
    address: "Go Vap, Ho Chi Minh City",
  },
  interests: [
    {
      id: 1,
      name: "React",
      icon: FaReact,
      color: "#61DBFB",
    },
    {
      id: 2,
      name: "Node.js",
      icon: IoLogoNodejs,
      color: "#68A063",
    },
    {
      id: 3,
      name: "TypeScript",
      icon: SiTypescript,
      color: "#007ACC",
    },
    {
      id: 4,
      name: "MongoDB",
      icon: SiMongodb,
      color: "#4DB33D",
    },
    {
      id: 5,
      name: "Next.js",
      icon: TbBrandNextjs,
      color: "#FFFFFF",
    },
    {
      id: 6,
      name: "Music",
      icon: FaMusic,
      color: "#868686",
    },
  ],
};
