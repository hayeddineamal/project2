import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-page10',
  templateUrl: './page10.component.html',
  styleUrls: ['./page10.component.css']
})
export class Page10Component implements OnInit {
  myForm:FormGroup;
  errorMessage:string;

  constructor(private fbb:FormBuilder  ,private router:Router, private authService :AuthService     ) {
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
 save(){
  const email =this.myForm.get('email').value;
  const password =this.myForm.get('password').value;
  this.authService .signInUser(email,password).then(
  ()=>{
    this.router.navigate(['/page6']);
      },
      (error) => {
        this.errorMessage=error
        alert("incorrect!!!");
      }
)

 
}
}


  

