import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  // public req =  "http://coderscommunity.herokuapp.com/"

  ngOnInit() {
    // this.http.get(this.req).subscribe((response)=> {
    //   console.log(response)
    // })
  }

}
