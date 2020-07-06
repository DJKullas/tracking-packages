import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth: AngularFireAuth;

  constructor(fireAuth: AngularFireAuth) {
    this.auth = fireAuth;
   }

   login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  
  logout() {
    this.auth.signOut();
  }

  ngOnInit(): void {
    
  }

}
