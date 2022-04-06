import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fresh-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  userNumber: string = '';
  loginvalid: boolean = false;

  constructor(private fb: FormBuilder) {
    
    this.loginForm = this.fb.group({
      mobilenumber: ['', Validators.required]
    })
    
  }

  submitLogin(){
    this.userNumber = this.loginForm.value.name; 
    console.log(this.userNumber , "user");    
  }

  ngOnInit(): void {

    this.loginForm.statusChanges.subscribe((val) =>{
      if(val=="VALID") {
        this.loginvalid = false
      }else {
        this.loginvalid = true
      }
      
    })

  }

}
