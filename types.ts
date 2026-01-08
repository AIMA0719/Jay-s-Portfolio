export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  techStack: string[];
  situation: string;
  task: string;
  action: string[];
  result: string[];
  highlightColor?: string;
}

export interface SkillMetric {
  subject: string;
  A: number;
  fullMark: number;
}
