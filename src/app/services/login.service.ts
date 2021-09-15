import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  user = { email:'test@test.com', pass:'123456789'}

  login(user:any):boolean{
    if (user.email == this.user.email && user.pass == this.user.pass) {
      sessionStorage.setItem('userLogged', String(true));
      return true
    } else {
      sessionStorage.setItem('userLogged', String(false));
      return false
    }
  }
  logout(){
    sessionStorage.setItem('userLogged', String(false));
  }
}
