import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  formUser: FormGroup

  loginFailed = false
  adminAccount = "admin@mail.com"
  adminPassword = "password"

  constructor(private router: Router,
    private fb: FormBuilder) {

    this.formUser = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get invalidEmail() {
      return this.formUser!.get('email')!.invalid && this.formUser!.get('email')!.touched
    
  }

  get invalidPassword() {
    return this.formUser.get('password')!.invalid && this.formUser.get('password')!.touched
  }

  login() {
    console.log("Hola");
    
    if(this.formUser.invalid){
      return Object.values( this.formUser.controls ).forEach( control =>{
        control.markAsTouched();
      })
    }
    
    let user = this.formUser.value.email 
    let password = this.formUser.value.password

    if(user != this.adminAccount || password != this.adminPassword){
        console.log("Inicio de sesión fallida")
        this.loginFailed = true      
    }else{
      console.log("OK")
      this.router.navigate(['/dashboard']);
    }

  }
}
