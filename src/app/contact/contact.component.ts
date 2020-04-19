import { Component, OnInit } from '@angular/core';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';
// import { fa } from '@fortawesome/
import { faFacebook,faInstagram,faLinkedin  } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
}
