import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id:any
  errorMessage:string ='';
  formGroup: FormGroup;
  errorMessage1:string ='';
 
  Cin:string 
  firstname:string
  lastname:string
  phone:string
  userdetails: User[] 
  
  userforupdate: AngularFireList<any>
  data = {
    cin: '',
    nom : '' ,

    prenom :  '' ,
    telephone :  ''  
   } 
    id1: any;
  addUserForm: FormGroup;

  constructor(private router:Router,private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private userService: UserService) {
      this.route.params.subscribe( params => {
        this.id = params
      });
      this.userforupdate = this.firebase.list('users');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)
     }

  ngOnInit(): void {
    this.formGroup =new FormGroup({
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
      ]),
    
    })
    this.userService.getUserById(this.id1).subscribe((results) => {
      
      this.getuser(results)
    
    })
 
 
  }
getuser(entries: { payload: { toJSON: () => any; }; key: any; }[]){
   
  this.userdetails = [];

  entries.forEach((element: { payload: { toJSON: () => any; }; key: any; }) => {
     
     
    let y = element.payload.toJSON()
    y["$key"] = element.key
    this.userdetails.push(y as User);

    this.data.cin = this.userdetails[0]['cin'] 
    this.data.nom = this.userdetails[0]['nom'] 
    this.data.prenom = this.userdetails[0]['prenom'] 
    this.data.telephone = this.userdetails[0]['telephone'] 
   
 })
 console.log("res");

      console.log(this.data.prenom);
      console.log(this.userdetails);
      }  




onSubmit1() {
    
  let create = 'false';
  
   console.log(this.data.cin);
   this.userforupdate.update(this.id1 , {
    cin :  this.data.cin ,
    nom : this.data.nom ,
  prenom:  this.data.prenom,
    telephone :  this.data.telephone
  }).then(added =>{




    
    this.router.navigate(['/pp-list'])
  
 

}).catch((error: { messaage: any; message: any; })=>{
console.error(error)
this.errorMessage1= error.messaage
console.log('error', error)
console.log(error.message)
})




}

}