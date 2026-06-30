import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if a user is currently logged in
  if (authService.authInstance.currentUser) {
    return true;
  } else {
    // Redirect to login if not authenticated
    router.navigate(['/admin/login']);
    return false;
  }
};