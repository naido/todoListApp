import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';

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
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.username==="naido" && this.password==='dummy') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin=true
    }
  }

}
