import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService, Users } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formUser: FormGroup;

  users: Users[] = [];

  loginFailed = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginSrv: LoginService
  ) {
    this.formUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.users = this.loginSrv.getUsers();
  }

  get invalidEmail() {
    return (
      this.formUser!.get('email')!.invalid &&
      this.formUser!.get('email')!.touched
    );
  }

  get invalidPassword() {
    return (
      this.formUser.get('password')!.invalid &&
      this.formUser.get('password')!.touched
    );
  }

  login() {
    if (this.formUser.invalid) {
      return Object.values(this.formUser.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    let user = this.formUser.value.email;
    let password = this.formUser.value.password;

    let session = false;

    this.users.forEach((usr) => {
      if (user == usr.user && password == usr.password) {
        user = usr.user;
        console.log('sesion correcta ', user);
        session = true;
      }
    });
    if (session) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginFailed = true
      console.log('sesion fallida');
    }
  }
}
