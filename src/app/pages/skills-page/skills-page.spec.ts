import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { SkillsPage } from './skills-page';

describe('SkillsPage', () => {
  let component: SkillsPage;
  let fixture: ComponentFixture<SkillsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsPage],
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig, 'skills-page-test-app')),
        provideFirestore(() => getFirestore()),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});