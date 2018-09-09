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
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

  isAuthenticated() {
    this.authChange.next();
    return this.isAuth;
  }
}