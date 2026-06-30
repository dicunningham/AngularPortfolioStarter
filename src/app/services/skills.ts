import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { SkillCategory, SkillItem } from '../models/skill.model';

export interface FlatSkillDocument {
  id?: string;
  name?: string;
  category?: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private firestore = inject(Firestore);
  private skillsCollection = collection(this.firestore, 'skills');

  getRawSkills(): Observable<FlatSkillDocument[]> {
    return collectionData(this.skillsCollection, { idField: 'id' }) as Observable<FlatSkillDocument[]>;
  }

  getSkillCategories(): Observable<SkillCategory[]> {
    return this.getRawSkills().pipe(
      map((skills: FlatSkillDocument[]) => {
        if (!skills || skills.length === 0) return [];

        const grouped: { [key: string]: SkillItem[] } = {};

        skills.forEach(skill => {
          const catTitle = skill.category || 'Other';
          if (!grouped[catTitle]) {
            grouped[catTitle] = [];
          }
          grouped[catTitle].push({
            name: skill.name || 'Unnamed Skill',
            iconClass: skill.icon || 'fa-solid fa-code'
          });
        });

        return Object.keys(grouped).map(title => ({
          title: title,
          skills: grouped[title]
        }));
      })
    );
  }

  async addSkill(name: string, category: string, icon: string): Promise<void> {
    await addDoc(this.skillsCollection, { name, category, icon });
  }

  async updateSkill(id: string, name: string, category: string, icon: string): Promise<void> {
    const docRef = doc(this.firestore, 'skills', id);
    await updateDoc(docRef, { name, category, icon });
  }

  async deleteSkill(id: string): Promise<void> {
    const docRef = doc(this.firestore, 'skills', id);
    await deleteDoc(docRef);
  }
}