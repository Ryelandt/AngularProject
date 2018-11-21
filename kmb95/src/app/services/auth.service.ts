import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  
  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
  }



  
    login(email: string, password: string) {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
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
