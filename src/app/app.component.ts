import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit()
  {
    firebase.initializeApp({
      apiKey: "AIzaSyAnPqehtvhs2Ce5f3OplIZ6WFAEtzexNbg",
      authDomain: "emarket-aed78.firebaseapp.com",
      databaseURL: "https://emarket-aed78.firebaseio.com",
      projectId: "emarket-aed78",
      storageBucket: "emarket-aed78.appspot.com",
      messagingSenderId: "625179213636"
    });
  }

}
