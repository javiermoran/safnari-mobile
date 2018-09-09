import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signupPage = SignupPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authService: AuthService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignup() {
    this.navCtrl.setRoot(this.signupPage);
  }

  login(form) {
    const { email, password } = form.value;
    this.authService.login(email, password);
  }
}
