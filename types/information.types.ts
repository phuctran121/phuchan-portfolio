import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

interface PersonalDetails {
  age: string;
  birthdate: string;
  phone: string;
  email: string;
  address: string;
}

interface Interest {
  id: number;
  name: string;
  icon: IconType;
  color: string;
}

export interface Introduction {
  image: StaticImageData;
  name: string;
  roles: string[];
  bio: string;
  personalDetails: PersonalDetails;
  interests: Interest[];
}

interface Tool {
  id: number;
  name: string;
  icon: IconType;
  color: string;
}

export interface Skill {
  category: string;
  description: string;
  tools: Tool[];
}

export interface Education {
  school: string;
  level: string;
  description: string;
  image: StaticImageData;
}
