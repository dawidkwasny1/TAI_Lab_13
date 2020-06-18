import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private logged;
  private logout;

  public credentials = {
    login: '',
    password: ''
  };

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }


  signIn() {
    return this.authService.authenticate(this.credentials).subscribe((result) => {
      if (!result) {
        this.logged = false;
      } else {
        this.logout = false;
        this.credentials = {
          login: '',
          password: ''
        };
        this.router.navigate(['/']);
      }
    });
  }

  isValid() {
    return (this.credentials.login !== '' && this.credentials.password !== '');
  }

}