import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { ManageSkillsComponent } from './manage-skills.component';

describe('ManageSkills', () => {
  let component: ManageSkillsComponent;
  let fixture: ComponentFixture<ManageSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSkillsComponent],
      providers: [
        provideRouter([]),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig, 'manage-skills-test-app')),
        provideFirestore(() => getFirestore(getApp('manage-skills-test-app'))),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});