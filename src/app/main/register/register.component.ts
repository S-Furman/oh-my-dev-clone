import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public faEyeSlash: IconDefinition = faEyeSlash;
  public isCheckboxChecked: boolean = false;
  constructor(private authService: AuthService) { }
  public onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.authUser('signUp', {email, password}).subscribe();
  }
  public checkboxHandler(event: boolean) {
    this.isCheckboxChecked = event;
  }
}
