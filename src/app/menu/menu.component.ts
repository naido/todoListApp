import { Component, OnInit } from '@angular/core';
import { HcAuthenticationService } from '../service/hc-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;

  constructor(hcAuthenticationService: HcAuthenticationService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hcAuthenticationService.isUserLoggedIn();  
  }

}
