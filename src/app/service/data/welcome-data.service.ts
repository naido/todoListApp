import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    //console.log("hello bean service");
    //add @CrossOrigin(origins="localhost:4200") on backend RestController
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello');
  }
}
