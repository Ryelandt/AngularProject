import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';







@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  membersList: AngularFireList<any>;
 
  
  constructor(private firebaseAuth: AngularFireAuth,private db : AngularFireDatabase,) { 
    this.user = firebaseAuth.authState;
    this.membersList= this.db.list('/members');
  }


  
  login(email: string, password: string) {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('succes connect', value.user.uid);
      })
      .catch(err => {
        console.log('something wrong',err.message)
      });
      
  }

  
  create(email: string, password: string) {
      this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      
      .then(value => {
       this.membersList.push(email)
      
       
        console.log('succes', value.user.uid);  
      })
      .catch(err => {
        console.log('something wrong',err.message)
      });
      
  }
 

  logout() {
    this.firebaseAuth.auth.signOut(); 
  }
}
