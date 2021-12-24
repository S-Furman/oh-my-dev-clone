import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isFormValid: boolean = false;
  public isLogin: boolean = false;
  public faEyeSlash: IconDefinition = faEyeSlash;
  public error: string | null  = null;
  constructor(private authService: AuthService, private router: Router) { }
  public onSubmit(form: NgForm) {
    this.isLogin = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.authUser('signIn', {email, password}).subscribe(() => {
      this.isLogin = false;
      this.router.navigate(['/']);
    }, error => {
      this.isLogin = false;
      this.error = error;
    });
    form.reset();
  }
}
