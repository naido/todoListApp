import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

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
    return this.http.get<HelloWorldBean>(`${API_URL}/hello`);
  }

  executeHelloWorldBeanPathVarService(name) {
    let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`${API_URL}/hello/pathVar/${name}`,
    {headers}); //if var name != headers, pass the object has {headers : myHeader}
  }

  createBasicAuthHttpHeader() {
    let userName='nuno'
    let password='nuno'
    let basicAuthHeaderString='Basic ' + window.btoa(userName + ':' + password);

    return basicAuthHeaderString;
  }
}
