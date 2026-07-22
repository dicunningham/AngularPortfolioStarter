import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { AuthService } from './auth';

describe('Auth', () => {
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Auth, useValue: {} }],
    });
    service = TestBed.inject(AuthService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});