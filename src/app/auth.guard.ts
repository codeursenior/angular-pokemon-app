import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService)
  
  if(authService.isLoggedIn) {
    return true;
  }

  router.navigate(['/login']);
  return false;  
}