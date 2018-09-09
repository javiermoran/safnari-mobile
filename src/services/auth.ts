import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AuthService {
  apiUrl: string = 'http://safnari.herokuapp.com/api';
  isAuth: boolean = false;
  authChange = new Subject();

  constructor(private httpClient: HttpClient) {}

  login(user: string, password: string) {
    this.httpClient.post(`${this.apiUrl}/users/token`, { email: user, password})
      .subscribe((sucess) => {
        console.log('successs');
        this.isAuth = true;
        this.authChange.next();
      }, (error) => {
        console.log('Error');
      });
  }

  logout() {
    this.isAuth = false;
    this.authChange.next();
  }

  isAuthenticated() {
    return this.isAuth;
  }
}