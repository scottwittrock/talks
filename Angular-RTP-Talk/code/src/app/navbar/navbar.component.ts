import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user; 

  constructor(public af: AngularFire) { 
    af.auth.subscribe((user)=>{
      this.user = user;
    })
  }

  ngOnInit() {
  }

  logout(){
    this.af.auth.logout();
  }

}
