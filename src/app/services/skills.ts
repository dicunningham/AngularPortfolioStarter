import { Injectable } from '@angular/core';
import { SkillCategory } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})

export class SkillsService {
  private skillCategories: SkillCategory[] = [
    {
      title: 'Frontend & UI',
      skills: [
        { name: 'HTML5', iconClass: 'fa-brands fa-html5' },
        { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt' },
        { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
        { name: 'Angular', iconClass: 'fa-brands fa-angular' },
        { name: 'React', iconClass: 'fa-brands fa-react' },
        { name: 'WordPress', iconClass: 'fa-brands fa-wordpress' },
        { name: 'TypeScript', iconClass: 'fa-brands fa-typescript' },
        { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' }
      ]
    },
    {
      title: 'Backend & Core CS',
      skills: [
        { name: 'Node.js', iconClass: 'fa-brands fa-node-js' },
        { name: 'Express', iconClass: 'fa-solid fa-server' },
        { name: 'Java', iconClass: 'fa-brands fa-java' },
        { name: 'Python', iconClass: 'fa-brands fa-python' },
        { name: 'C', iconClass: 'fa-solid fa-c' },
        { name: 'PHP', iconClass: 'fa-brands fa-php' },
        { name: 'SQL', iconClass: 'fa-solid fa-database' },
        { name: 'PostgreSQL', iconClass: 'fa-brands fa-postgresql' },
        { name: 'REST APIs', iconClass: 'fa-solid fa-plug' },
        { name: 'SOAP APIs', iconClass: 'fa-solid fa-plug' },
        { name: 'ASP.NET', iconClass: 'fa-brands fa-microsoft' },
        { name: 'PowerShell', iconClass: 'fa-solid fa-terminal' },
        { name: 'Perl', iconClass: 'fa-solid fa-terminal' }
      ]
    },
    {
      title: 'Systems, Security & Infrastructure',
      skills: [
        { name: 'Ubuntu', iconClass: 'fa-brands fa-ubuntu' },
        { name: 'Windows', iconClass: 'fa-brands fa-windows' },
        { name: 'IIS', iconClass: 'fa-brands fa-microsoft' },
        { name: 'Docker', iconClass: 'fa-brands fa-docker' },
        { name: 'Bash / Shell', iconClass: 'fa-solid fa-terminal' }
      ]
    },
    {
      title: 'Developer Tools & Platforms',
      skills: [
        { name: 'Git', iconClass: 'fa-brands fa-git-alt' },
        { name: 'GitHub', iconClass: 'fa-brands fa-github' },
        { name: 'Vercel', iconClass: 'fa-solid fa-play fa-rotate-270' },
        { name: 'Postman', iconClass: 'fa-solid fa-vial' },
        { name: 'Vite', iconClass: 'fa-solid fa-bolt' },
        { name: 'npm', iconClass: 'fa-brands fa-npm' }
      ]
    }
  ];

  getSkillCategories(): SkillCategory[] {
    return this.skillCategories;
  }
}
