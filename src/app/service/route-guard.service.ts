import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HcAuthenticationService } from './hc-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private hcAuthenticationService: HcAuthenticationService,
    private router: Router,
    private basicAuthServ : BasicAuthenticationService
    ) { 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hcAuthenticationService.isUserLoggedIn() || this.basicAuthServ.isUserLoggedIn()){
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
