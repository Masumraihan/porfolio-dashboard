export type TSocial = {
  id: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  github: string;
  gmail: string;
  whatsapp: string;
  createdAt: string;
  updatedAt: string;
};
export type TProfile = {
  id: string;
  name: string;
  address: string;
  phone: string;
  about: string;
  shortBio: string;
  email: string;
  photo: string;
  resumeURL: string;
  logoURL: string;
  createdAt: string;
  updatedAt: string;
};
export type TEducation = {
  id: string;
  degree: keyof typeof Degree;
  institution: string;
  result: string;
  startDate: string;
  endDate: string | null;
  ongoing: boolean;
  gradType: string;
};

export type TExperience = {
  id: string;
  company: string;
  position: string;
  description: string;
  responsibilities: string[];
  startDate: string;
  endDate: string;
  ongoing: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TProject = {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  ongoing: boolean;
  thumbnail: string;
  images: string[];
  isTeamProject: boolean;
  features: string[];
  frontendGithub?: string;
  backendGithub?: string;
  preview: string;
  index: number;
  projectTechnology: TProjectTechnology[];
  createdAt: string;
  updatedAt: string;
};

export type TProjectTechnology = {
  id: string;
  technologies: string[];
  technology: keyof typeof Technology;
  projectId: string;
  project: TProject;
  createdAt: string;
  updatedAt: string;
};

export type TSkill = {
  id: string;
  name: string;
  description: string;
  icon: string;
  level: keyof typeof SkillLevel;
  createdAt: string;
  updatedAt: string;
};

export const Degree = {
  HSC: "HSC",
  SSC: "SSC",
  HONOURS: "HONOURS",
  MASTERS: "MASTERS",
  OTHER: "OTHER",
};

export const Technology = {
  Frontend: "Frontend",
  Backend: "Backend",
  Devops: "Devops",
  Database: "Database",
  Cloud: "Cloud",
  Other: "Other",
};

export const SkillLevel = {
  FAMILIAR: "FAMILIAR",
  COMFORTABLE: "COMFORTABLE",
  EXPERT: "EXPERT",
};

export const GradType = {
  CGPA: "CGPA",
  GPA: "GPA",
  OTHER: "OTHER",
};
