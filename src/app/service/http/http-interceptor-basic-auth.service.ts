import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    //let userName='nuno'
    //let password='nuno'
    //let basicAuthHeaderString='Basic ' + window.btoa(userName + ':' + password);

    let basicAuthHeaderString=this.basicAuthService.getAuthenticationToken();
    let username=this.basicAuthService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders:{
          Authorization:basicAuthHeaderString
        }
      })
    }

    return next.handle(request);

  }
}
