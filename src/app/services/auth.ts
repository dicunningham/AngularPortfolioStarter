import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private app = initializeApp(environment.firebaseConfig);
  public auth = getAuth(this.app);

  constructor() {}

  // Login method
  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  // Logout Method
  async logout() {
    return await signOut(this.auth);
  }

}