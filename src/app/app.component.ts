import { Component } from '@angular/core';
import firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyDWueLkPBTXZKjS_Kx3XUIfg7PzCfoZ8ww",
      authDomain: "angularp1-71f3f.firebaseapp.com",
      projectId: "angularp1-71f3f",
      storageBucket: "angularp1-71f3f.appspot.com",
      messagingSenderId: "61270924337",
      appId: "1:61270924337:web:707ba989635c0a8c7e4910",
      measurementId: "G-CJLHJYMXQP"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
