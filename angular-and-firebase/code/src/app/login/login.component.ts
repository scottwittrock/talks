import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLogin: boolean = true;
  email: string;
  password: string; 

  constructor(public af: AngularFire) { }

  ngOnInit() {
  }

  toggleForm(){
    this.showLogin = !this.showLogin;
  }

  login(){
    this.af.auth.login({email: this.email, password: this.password}).then(()=>{
      window.location.href = "/";

    })
  }

  createAccount(){
    this.af.auth.createUser({email: this.email, password: this.password}).then((response)=>{
      console.log(response);
      this.af.database.object("users/" + response.uid).update({email: this.email, id: response.uid})
      this.af.database.object("users/" + response.uid).subscribe((userObj)=>{
        console.log(userObj);
        window.location.href = "/";
      })
    })
  }

}
