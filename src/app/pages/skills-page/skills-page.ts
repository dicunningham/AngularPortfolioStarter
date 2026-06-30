import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../../services/skills';
import { SkillCategory } from '../../models/skill.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.scss',
})
export class SkillsPage implements OnInit, OnDestroy {
  private skillsService = inject(SkillsService);
  
  categories: SkillCategory[] = [];
  loading = true;
  private sub!: Subscription;

  ngOnInit(): void {
    // Listen to real-time updates from our service stream
    this.sub = this.skillsService.getSkillCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error streaming skill categories:', err);
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}