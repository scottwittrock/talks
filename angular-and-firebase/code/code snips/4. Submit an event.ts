//Add library
import { AngularFire } from 'angularfire2';

//Construct
public af: AngularFire


//Submit a new event
    this.af.database.list("meetup").push(event).then((response)=>{
      console.log(response);
      console.log("we added an event");
      window.location.href = "/";
    })