import { AngularFire } from 'angularfire2'

public af: AngularFire


    this.af.database.list("meetup/").subscribe((listOfEvents)=>{

      this.events = listOfEvents;

    })