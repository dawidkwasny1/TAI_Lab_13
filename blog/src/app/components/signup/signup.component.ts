import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public confirmPassword = '';

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/']);
  }

  isFormValid() {
    return !((this.credentials.name === '') || (this.credentials.email === '') || (this.credentials.password !== this.confirmPassword) || (this.credentials.password.length < 5) || (this.credentials.password.length > 15) || (this.credentials.password === '') || !this.validateEmail(this.credentials.email));
  }

  validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }
}