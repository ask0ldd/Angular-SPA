import { CanActivateFn, Router } from '@angular/router';
import { CookiesService } from './cookies.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const cookiesManager = inject(CookiesService)
  if(cookiesManager.isTokenAlive()) return true
  const router = inject(Router)
  router.navigateByUrl('/login')
  return false
}
