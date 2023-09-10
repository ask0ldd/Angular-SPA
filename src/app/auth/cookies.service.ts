import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  setCookie(cookieDatas : {userId : string, token : string}){
    document.cookie = `id=${cookieDatas.userId}; Secure`
    document.cookie = `token=${cookieDatas.token}; Secure`
  }

  eraseCookie(){
    document.cookie = "token=; Max-Age=0;"
    document.cookie = "id=; Max-Age=0;"
  }

  isTokenAlive(){
    const cookie = document.cookie
    return cookie.search("token")===-1 ? false : true
  }
}
