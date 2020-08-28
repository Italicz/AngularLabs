import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  newuser:User;
  email:string = "";
  username:string = "";
  age: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (this.newuser !=null){
      this.username = this.newuser.username;
      this.age = this.newuser.age;
      this.email = this.newuser.email;
    }else {
      this.router.navigate(['/login'])
    }
  }
  updateDetails(event){
    event.preventDefault();
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (this.newuser !=null){
      this.newuser.username = this.username;
      this.newuser.age = this.age;
      this.newuser.email = this.email;

      sessionStorage.setItem('currentUser', JSON.stringify(this.newuser));
      this.router.navigate(['/account']);
  }
}
}
