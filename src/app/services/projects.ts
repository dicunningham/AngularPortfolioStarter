import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})

export class Projects {
  private projects: Project[] = [
    {
      name: "Hospital Intranet Dashboard",
      image: "/placeholder-dashboard-design-example-hcare.png",
      description: "A modernized user interface for the team member contact directory and internal resources, improving usability and strict compliance with brand templates.",
      tags: ["JavaScript", "HTML/CSS", "CMS"],
      repoLink: "https://github.com",
      demoLink: "https://example.com"
    },
    {
      name: "Capital Campaign Website",
      image: "/placeholder-app.png",
      description: "Designed and developed public-facing web pages to strongly support the hospital's capital campaign, focusing heavily on intuitive layouts.",
      tags: ["React", "Tailwind CSS"],
      demoLink: "https://example.com"

    },
     {
      name: "Patient Services Portal",
      image: "/placeholder-image.png",
      description: "A full-stack prototype focusing on web accessibility and seamless communication between patients and hospital administration.",
      tags: ["Node.js", "Express", "PostgreSQL"],
     demoLink: "https://example.com"

    },
    {
      name: "CS Algorithms Library",
      image: "/placeholder-image.png",
      description: "A deep-dive collection of fundamental computer science algorithms and data structures implemented natively in Java and C++ as part of my university coursework.",
      tags: ["Java", "C++", "Algorithms"],
     repoLink: "https://github.com"

    },
    {
      name: "Sample Python Project",
      image: "/placeholder-image.png",
      description: "Python project that analyzes stock market data.",
      tags: ["Python", "Pandas"],
      repoLink: "https://github.com"
    },
    {
      name: "Chrome Extension",
      image: "/placeholder-image.png",
      description: "Tracks live marketplace furniture pricing trends.",
      tags: ["JavaScript", "Webpack"],
      repoLink: "https://github.com",
      demoLink: "https://example.com"
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
  
}
