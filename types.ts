export interface TechCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  // role field is removed as per previous context or used internally, 
  // but we will keep it optional if needed, though strictly following the new data structure.
  role?: string; 
  detailedTechStack: TechCategory[]; // Changed from simple string[] to detailed structure
  situation: string; // Used for "담당 업무" or Context
  task: string;
  action: string[]; // Used for "주요 구현 내용"
  result: string[]; // Used for "성과 및 개선점"
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