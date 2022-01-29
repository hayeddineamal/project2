import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  myForm:FormGroup
  errorMessage: any;
  router: any;

  constructor(private fbb:FormBuilder, private toastr:ToastrService,private authService :AuthService) {
    let formControls={
    Nom:new FormControl('',[
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
       Validators.minLength(6)
      ]),
 
   }
     this.myForm=this.fbb.group(formControls)
 
   }
   get Nom(){
    return this.myForm.get('Nom');
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

  save() {
    
    const email =this.myForm.get('email').value;
    const password=this.myForm.get('password').value;
    this.authService .signInUser(email,password).then(
   
      ()=>{
        this.router.navigate(['/page10']);
          },
          (error) => {
            this.errorMessage=error
            alert("incorrect!!!");
          }
    )
   
     
   }
   } 
  



