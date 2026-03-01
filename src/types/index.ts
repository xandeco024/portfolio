export type ProjectCategory = "digital" | "physical";

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  images: string[];
  problem: string;
  construction: string;
  decisions: string;
  result: string;
  tools: string[];
  links?: ProjectLinks;
  featured?: boolean;
  logo?: string;
  bgColor?: string;
}

export interface Game {
  slug: string;
  title: string;
  description: string;
  objective: string;
  tools: string[];
  highlight: string;
  image: string;
  platforms?: string[];
  link?: string;
}

export interface SecondaryProject {
  slug: string;
  title: string;
  description: string;
  category: "woodwork" | "agroforest" | "other";
  tools?: string[];
  images: string[];
  status?: "em-progresso" | "completo";
}
