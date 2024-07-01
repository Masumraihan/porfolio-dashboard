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
