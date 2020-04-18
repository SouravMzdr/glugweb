import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init({
      easing:'ease',
      duration:1000,
    });

    AOS.init({
      // disable: function () {
      //   var maxWidth = 800;
      //   return window.innerWidth < maxWidth;
      // }
    });
  }

}
