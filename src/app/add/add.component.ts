import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  errorMessage1:string ='';
  errorMessage:string ='';
  addUserForm: FormGroup;
 
  cin:string 
  nom:string
  prenom:string
 telephone:string

  userList: AngularFireList<any>



  constructor(private userService : UserService, private router:Router,
    private db:AngularFireDatabase )
     { 
      this.userList = db.list('users')
     }

  ngOnInit(): void {

    this.addUserForm=new FormGroup({
      Cin: new FormControl('',[
        Validators.required,
      Validators.pattern("[0-9]+"),
        Validators.minLength(3)
      ]),
   Nom: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      Prenom: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      Telephone: new FormControl
('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ])
    
    });
  }
  onSubmit() {
 
    let create = 'false';
    
            this.userList.push({
          
            cin: this.cin ,
            nom: this.nom ,
            prenom: this.prenom,
            telephone: this.telephone,
          
              }).then(added =>{
                this.router.navigate(['/pp-list'])
              }).catch((error: any)=>{
                console.error(error)
                
                })
            }
  
       



          }
