import { Component, OnInit } from '@angular/core';
import { init }  from 'aos';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  // public req =  "http://coderscommunity.herokuapp.com/"

  faAngleDoubleDown =  faAngleDoubleDown

  ngOnInit() {
    init({
      easing:'ease',
      duration:2000,
    });


    init({
      // disable: function () {
      //   var maxWidth = 800;
      //   return window.innerWidth < maxWidth;
      // }
    });
  }
  

}
