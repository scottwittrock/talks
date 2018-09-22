import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2'

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  events; 

  constructor(public af: AngularFire) { }

  ngOnInit() {
    this.af.database.list("events/").subscribe((listOfEvents)=>{

      this.events = listOfEvents;

    })
  }

}
