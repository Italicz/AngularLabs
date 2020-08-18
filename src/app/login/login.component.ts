import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  accounts = [
    {email:"james@angier.co.uk", password:"abc123"},
    {email:"david@angier.co.uk", password:"123abc"},
    {email:"alison@angier.co.uk", password:"1234"}
  ]
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  registeredAccount() {
    var registered = false;
    for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].email == this.email && this.accounts[i].password == this.password) {
            registered = true;
        }
    }
    if (registered) {
      this.router.navigateByUrl("/account")
    }
    else {
      alert("Invalid Credentials")
    }
  }

}
