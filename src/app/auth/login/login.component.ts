import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isRequested:boolean=false;
  disabled:boolean=true
  constructor(private fb:FormBuilder,private router:Router){}
loginFormValues=this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: [
    '',
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)
    ]
  ],
})
login(){
  this.router.navigate(['/pages/dashboard'])
  if(this.loginFormValues.controls.email.errors==null && this.loginFormValues.controls.password.errors==null){
    // this.disable=false;

    console.log(this.loginFormValues);
  }
  else{
// this.disable=true;
  }
}


}
