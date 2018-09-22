import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.css']
})
export class EventcardComponent implements OnInit {

  @Input() meetup;


  constructor() {
    console.log(this.meetup)
   }

  ngOnInit() {
  
  }



}
