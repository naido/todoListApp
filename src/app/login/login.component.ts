import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { HcAuthenticationService } from '../service/hc-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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
    private hcAuthenticationService: HcAuthenticationService,
    private basicAuthService: BasicAuthenticationService) { }

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

  handleBasicAuthLogin() {
    this.basicAuthService.executeBasicAuthService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin=true
        }
      )

    
    
  }

}
