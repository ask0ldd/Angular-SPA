import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  setCookie(cookieDatas : {userId : number, email : string, token : string}) : void {
    document.cookie = `id=${cookieDatas.userId}; Secure`
    document.cookie = `email=${cookieDatas.email}; Secure`
    document.cookie = `token=${cookieDatas.token}; Secure`
  }

  eraseCookie() : void {
    document.cookie = "token=; Max-Age=0;"
    document.cookie = "id=; Max-Age=0;"
    document.cookie = "email=; Max-Age=0;"
  }

  isTokenAlive() : boolean {
    return document.cookie.search("token")===-1 ? false : true
  }

  getToken() : string | undefined {
    return document.cookie.search("token")!=-1 ? document.cookie.split('; ').find((cookie) => cookie.startsWith('token='))?.split('=')[1] : undefined
  }

  getUserId() : string | undefined {
    const user = document.cookie.split('; ').find((cookie) => cookie.startsWith('id='))?.split('=')[1]
    return user
  }
}
