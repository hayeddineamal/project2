import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
isAuth:boolean;
  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {
  
  firebase.auth().onAuthStateChanged(
    (user) => {
      if (user) {
        this.isAuth=true;
      } else {
        this.isAuth=false;
      }
    }
  );
}

  onSignOut(){
  this.AuthService.signOutUser();
 

}
}

