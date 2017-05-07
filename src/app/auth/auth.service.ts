import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }

  signUp(email : string, password : string)
  {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }

  signIn(email : string, password : string)
  {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    )
  }

}
