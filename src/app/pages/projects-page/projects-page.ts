import { Component, OnInit, inject } from '@angular/core';
import { Projects } from '../../services/projects';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-page',
  imports: [],
  templateUrl: './projects-page.html',
  styleUrls: ['./projects-page.scss']
})
export class ProjectsPage implements OnInit {
  private projectsService = inject(Projects);
  
  // Make sure this does NOT say "private" before it!
  projects: Project[] = []; 

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}