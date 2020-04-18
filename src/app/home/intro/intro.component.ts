import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  // public req =  "http://coderscommunity.herokuapp.com/"



  ngOnInit() {
    AOS.init({
      easing:'ease',
      duration:2000,
    });

    AOS.init({
      // disable: function () {
      //   var maxWidth = 800;
      //   return window.innerWidth < maxWidth;
      // }
    });
  }
  

}
