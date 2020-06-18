import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username='';
  password='';
  errorMessage='Invalid Credentials';
  invalidLogin=false;

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  handleBasicAuthLogin() {
    this.authService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['blog']);
            this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }   

}