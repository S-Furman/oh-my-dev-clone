import { Component } from '@angular/core';
import { faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isFormValid: boolean = false;
  public faEyeSlash: IconDefinition = faEyeSlash;
  constructor(private authService: AuthService) { }
  public onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.authUser('signIn', {email, password});
    form.reset();
  }

}
