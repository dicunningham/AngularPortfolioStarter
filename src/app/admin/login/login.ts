import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loading = signal(false);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  async handleLogin() {
    if (this.loginForm.invalid) return;

    this.loading.set(true);

    try {
      const { email, password } = this.loginForm.value;
      await this.authService.login(email!, password!);
      this.router.navigate(['/admin/dashboard']);
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    } finally {
      this.loading.set(false);
    }
  }
}