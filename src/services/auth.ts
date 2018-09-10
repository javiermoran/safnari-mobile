import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { MenuController } from "ionic-angular";

@Injectable()
export class AuthService {
  apiUrl: string = 'http://safnari.herokuapp.com/api';
  isAuth: boolean = false;
  authChange = new Subject();
  token: string;

  constructor(
    private httpClient: HttpClient,
    private menuCtrl: MenuController
  ) {}

  login(user: string, password: string) {
    this.httpClient.post(`${this.apiUrl}/users/token`, { email: user, password})
      .subscribe((response) => {
        this.token = response['token'];
        this.isAuth = true;
        this.authChange.next();
      }, (error) => {
        console.log('Error');
      });
  }

  getUserInfo() {
    return this.httpClient.get(`${this.apiUrl}/users/me`);
  }

  logout() {    
    this.isAuth = false;
    this.token = null;
    this.authChange.next();
    this.menuCtrl.close();
  }

  isAuthenticated() {
    return this.isAuth;
  }

  getToken() {
    return this.token;
  }
}