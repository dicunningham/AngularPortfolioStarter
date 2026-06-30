import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',

})
export class AuthService {
  // We use the 'inject' function to grab the instance Angular already created
  private auth = inject(Auth);

  get authInstance() {
    return this.auth;
  }

  // Login method
  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  // Logout Method
  async logout() {
    return await signOut(this.auth);
  }
}