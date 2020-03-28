import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {

name = 'Angular';
album:any = [];
constructor() {

}


  ngOnInit() {
  }

}
