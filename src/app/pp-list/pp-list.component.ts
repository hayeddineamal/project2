import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pp-list',
  templateUrl: './pp-list.component.html',
  styleUrls: ['./pp-list.component.css']
})
export class PpListComponent implements OnInit {
  userUpdate : User= new User();
 
  id:any
  errorMessage:string ='';
  errorMessage1:string =''; 
  cin:string
  nom:string
  prenom:string
  telephone:string
  userforupdate: AngularFireList<any>
  data = {
   cin:'',
    nom:'',
    prenom:  '' ,
    telephone :  ''  
   } 
    id1: any;

userfordelete : AngularFireList<any>; 
listuser: User[]= [];
formGroup: FormGroup;
  userList:AngularFireList<unknown> ;




  constructor(private router:Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase,  private userService: UserService,
    private route: ActivatedRoute , 
      private db:AngularFireDatabase ,private fire:AngularFireAuth) {

        this.userList = db.list('users');

        this.userfordelete = this.firebase.list('users');
        this.route.params.subscribe( params => {
          this.id = params
        });
        
        this.userforupdate = this.firebase.list('users');
        this.id1 = this.route.snapshot.paramMap.get('id');
        console.log(this.id1)
       
  
  
  
  
       }
  


  ngOnInit(): void {
    this.userService.getUsers().subscribe((results) => {
      
      this.listUser(results)
   
    })
  }
  listUser(entries:any){
    this.listuser = [];
    entries.forEach((element: { payload: { toJSON: () => any; }; key: any; }) => {
     let y = element.payload.toJSON()
     y["$key"] = element.key
     this.listuser.push(y as User);
  })
  console.log(this.listuser);
  }
  openDialog(key:any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.userfordelete.remove(key);
      
     
      }
    });   
  }
 
  edit(key: string){
    
    this.router.navigate(['update-user/'+key])
  
  }

}

