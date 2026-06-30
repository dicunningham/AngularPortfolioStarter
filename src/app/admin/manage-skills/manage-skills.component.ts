import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SkillsService, FlatSkillDocument } from '../../services/skills';

@Component({
  selector: 'app-manage-skills',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './manage-skills.component.html',
  styleUrl: './manage-skills.component.scss'
})
export class ManageSkillsComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private skillsService = inject(SkillsService);

  skillForm!: FormGroup;
  skills: FlatSkillDocument[] = [];
  loading = true;

  editingId = signal<string | null>(null);

  private sub!: Subscription;

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      icon: ['']
    });

    this.loadSkills();
  }

  loadSkills(): void {
    this.sub = this.skillsService.getRawSkills().subscribe({
      next: (data) => {
        this.skills = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching admin data list:', err);
        this.loading = false;
      }
    });
  }

  startEdit(skill: FlatSkillDocument): void {
    if (!skill.id) return;
    this.editingId.set(skill.id);
    this.skillForm.setValue({
      name: skill.name || '',
      category: skill.category || '',
      icon: skill.icon || ''
    });
  }

  cancelEdit(): void {
    this.editingId.set(null);
    this.skillForm.reset();
  }

  async saveSkill(): Promise<void> {
    if (this.skillForm.invalid) return;

    const { name, category, icon } = this.skillForm.value;
    const id = this.editingId();

    try {
      if (id) {
        await this.skillsService.updateSkill(id, name, category, icon);
      } else {
        await this.skillsService.addSkill(name, category, icon);
      }
      this.cancelEdit();
    } catch (error) {
      console.error('Failed to save skill record:', error);
    }
  }

  async deleteSkill(id: string | undefined): Promise<void> {
    if (!id) return;

    if (confirm('Are you sure you want to remove this skill component?')) {
      try {
        await this.skillsService.deleteSkill(id);
      } catch (error) {
        console.error('Failed to remove skill record:', error);
      }
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}