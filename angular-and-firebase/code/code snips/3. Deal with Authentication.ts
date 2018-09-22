//Import Angular fire
import { AngularFire } from "angularfire2";

//add to constructor
public af: AngularFire

// Set up create account function
		this.af.auth.createUser({email: this.email, password: this.password})
		.then((response)=>{
			console.log(response);
			this.af.database.object("users/" + response.uid).update({
				email: this.email, 
				id: response.uid
			}).then(()=>{
				window.location.href = "/";
			}).catch((err) =>{
				console.error(err);
			})
		}).catch((err)=>{
			console.error(err);
		})

//Allow a user to login

    this.af.auth.login({email: this.email, password: this.password}).then(()=>{
      window.location.href = "/";

    })

//Import Firebase
import { AngularFire } from 'angularfire2';
//Constuct
public af: AngularFire

//subscribe

    af.auth.subscribe((user)=>{
      this.user = user;
    })

//create Logout
    this.af.auth.logout();
