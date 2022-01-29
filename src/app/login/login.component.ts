import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  myForm:FormGroup
  errorMessage:string;
 


  constructor(private fbb:FormBuilder,private toastr: ToastrService  ,private AuthService:AuthService ,private router:Router ) {
   let formControls={
  
   
   
 


    email :new FormControl('',[
      Validators.required,
      Validators.email
    ]),
   password:new FormControl('',[
    Validators.required,
    Validators.minLength(6)
     ]),

  }
    this.myForm=this.fbb.group(formControls)

  }
 
  get  password() {
    return this.myForm.get('password');
   }
   get email() {
    return this.myForm.get('email');
   }
 

  ngOnInit(): void {
  }
  save() {
    const email =this.myForm.get('email').value;
 const password =this.myForm.get('password').value;
 this.AuthService.signInUser(email,password).then(
   ()=>{
     this.router.navigate(['/home']);
       },
       (error) => {
         this.errorMessage=error
         alert("connexion invalid");
       }
 )

  
}
}
