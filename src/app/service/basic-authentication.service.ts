import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http : HttpClient
  ) { }

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
  
  executeBasicAuthService(username, password) {
    let basicAuthHeaderString='Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicAuth`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('autenticatedUser', username)
          return data;
        }
      )
    );
  }

}

export class AuthenticationBean {
  constructor(public message:string){}
}
