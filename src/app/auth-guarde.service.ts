import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardeService {

  constructor(private router:Router) { }

canActivate(): Observable<boolean> | Promise<boolean> |boolean {
  return new Promise(
    (resolve,reject) => {
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            resolve(true); 
          } else {
            this.router.navigate(['/login']);
            reject(false);
          }
        }
      );
    }
  );

  }
}