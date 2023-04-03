import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isRequested:boolean=false;

  longitude!: number
  latitude!: number
  // frmValue:any
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
   

    
  }
frmValue=this.fb.group({
  name: [
    '',
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]
  ], password: [
    '',
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)
    ]
  ],
  email: ['', [Validators.required, Validators.email]],
  address: ['', [Validators.required]],
  phoneno: ['', [Validators.required, Validators.minLength(10),
    Validators.maxLength(10)]],
    acceptTerms: [false, Validators.requiredTrue]
})
signup(){
    console.log(this.frmValue)
  }
 

}
