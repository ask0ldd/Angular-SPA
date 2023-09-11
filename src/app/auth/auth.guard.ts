import { CanActivateFn } from '@angular/router';
import { CookiesService } from './cookies.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  return true;
};
