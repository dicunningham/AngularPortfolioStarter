export interface SkillItem {
  name: string;
  iconClass?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}