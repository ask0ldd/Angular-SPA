import { CanActivateFn, Router } from '@angular/router'
import { CookiesService } from './cookies.service'
import { inject } from '@angular/core'
// import { JwtHelperService } from '@auth0/angular-jwt'

export const authGuard: CanActivateFn = (route, state) => {
  const cookiesManager = inject(CookiesService)
  // const jwtHelper = inject(JwtHelperService)
  // !this.jwtHelper.isTokenExpired(token)
  if(cookiesManager.isTokenAlive()) return true
  const router = inject(Router)
  router.navigateByUrl('/login')
  return false
}
