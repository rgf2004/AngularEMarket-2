import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router} from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router ) { }

  ngOnInit() {
  }

  onSignIn(form : NgForm)
  {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password);
    this.router.navigate(["/"]); // TODO check the status before navigating
  }

}