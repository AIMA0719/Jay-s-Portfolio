export interface TechCategory {
  category: string;
  skills: string[];
}

export interface KeyFeature {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  overview: string;
  team: string;
  scope: string;
  keyFeatures: KeyFeature[];
  detailedTechStack: TechCategory[];
  highlightColor?: string;
}

export interface SkillMetric {
  subject: string;
  A: number;
  fullMark: number;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}