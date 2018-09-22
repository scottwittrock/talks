import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  title: string; 
  date: string;
  description: string; 
  url: string;

  constructor(public af: AngularFire) { 
  
  }

  ngOnInit() {
  }

  submitEvent(){
    let event = {
      title: this.title, 
      date: this.date, 
      description: this.description,
      url: this.url
    }
    this.af.database.list("events").push(event).then((response)=>{
      console.log(response);
      console.log("we added an event");
      window.location.href = "/";
    })
  }

}
