import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 2 ||     
    document.documentElement.scrollTop > 2) {
      document.getElementById('mainNav').classList.add('navbar-color');
    }
    else{
      document.getElementById('mainNav').classList.remove('navbar-color');

    }
  }

}
