import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
  video: string;
  description: string;
  demoLink?: string;
  githubLink: string;
}
