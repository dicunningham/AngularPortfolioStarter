import { TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { SkillsService } from './skills';

describe('SkillsService', () => {
  let service: SkillsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
      ],
    });
    service = TestBed.inject(SkillsService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});