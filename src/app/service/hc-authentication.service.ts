import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HcAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username==="naido" && password==='dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
