import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { HcAuthenticationService } from '../service/hc-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'naido'
  password = ''
  errorMessage = 'Invalid Credentials entered'
  invalidLogin = false

  //Router
  
  constructor(private router: Router,
    private hcAuthenticationService: HcAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.hcAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin=true
    }
  }

}
