import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myForm:FormGroup
  errorMessage:string;


  constructor(private fbb:FormBuilder, private AuthService:AuthService , private router:Router) {
   let formControls={
   nom:new FormControl('',[
      Validators.required,
      Validators.pattern("[A-Za-z]+"),
      Validators.minLength(3)
     ]),
   
     prenom :new FormControl('',[
      Validators.required,
      Validators.pattern("[A-Za-z]+"),
      Validators.minLength(3)
    ]),
 


    email :new FormControl('',[
      Validators.required,
      Validators.email
    ]),
  password:new FormControl('',[
      Validators.required,
      
      Validators.minLength(8)
     ]),

  }
    this.myForm=this.fbb.group(formControls)

  }
  get nom(){
   return this.myForm.get('nom');
  }
  get prenom() {
    return this.myForm.get('prenom');
   }
   get email() {
    return this.myForm.get('email');
   }
   get password() {
    return this.myForm.get('password');
  
  
    }

  ngOnInit(): void {
  }
  save(){
  
  
 const email =this.myForm.get('email').value;
 const password =this.myForm.get('password').value;
 this.AuthService.createNewUser(email,password).then(
   ()=>{
     this.router.navigate(['/login']);
       },
       (error) => {
         this.errorMessage=error
         alert("conxion invalid");
       }
 )

  
}
}
