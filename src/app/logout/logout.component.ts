import { Component, OnInit } from '@angular/core';
import { HcAuthenticationService } from '../service/hc-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hcAuthenticationService: HcAuthenticationService,
    private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
    //this.hcAuthenticationService.logout();
    this.basicAuthService.logout();
  }

}
