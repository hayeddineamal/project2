import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: AngularFireList<any>

  constructor(private db:AngularFireDatabase) {
    this.userList = db.list('users')
   }

   createUser(user: User) {
      
      this.userList.push({
        cin: user.cin,
      nom : user.nom ,
      prenom : user.prenom ,
     
      telephone: user.telephone 
      
  }).catch((error: any)=>{
  console.error(error)
  
  })
  
  }
  getUsers() : Observable<any>{
    return this.db.list('users').snapshotChanges();
    }
    
    getUserById(id: any) : Observable<any>{
      return this.db.list('users', ref => ref.orderByKey().equalTo(id)).snapshotChanges();

    }

}
