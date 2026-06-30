import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private auth = inject(AuthService);
  private router = inject(Router);

  async logout() {
    try {
      await this.auth.logout();
      this.router.navigate(['/admin/login']);
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
}