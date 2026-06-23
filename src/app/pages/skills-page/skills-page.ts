import { Component, OnInit, inject } from '@angular/core';
import { SkillsService } from '../../services/skills';
import { SkillCategory } from '../../models/skill.model';

@Component({
  selector: 'app-skills-page',
  imports: [],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.scss',
})
export class SkillsPage implements OnInit {
  private skillsService = inject(SkillsService);
  categories: SkillCategory[] = [];

  ngOnInit(): void {
    this.categories = this.skillsService.getSkillCategories();
  }
}
