import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card p-4">
            <h2 class="mb-3">Admin Login</h2>
            <div class="mb-3">
              <input [(ngModel)]="email" class="form-control" placeholder="Email" />
            </div>
            <div class="mb-3">
              <input [(ngModel)]="password" type="password" class="form-control" placeholder="Password" />
            </div>
            <button (click)="handleLogin()" class="btn btn-primary w-100">Login</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Login {
  email = '';
  password = '';
  private authService = inject(AuthService);
  private router = inject(Router);

  async handleLogin() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/admin/dashboard']);
    } catch (error) {
      alert('Login failed. Check your credentials.');
    }
  }
}