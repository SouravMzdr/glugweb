import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery'

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {

  constructor() { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit() {

    this.galleryOptions = [
        { "imagePercent": 80, "thumbnailsPercent": 20, "thumbnailsColumns": 6, "thumbnailsMargin": 0, "thumbnailMargin": 0,"lazyLoading":true},
        { "breakpoint": 500, "width": "500px", "height": "300px", "thumbnailsColumns": 3 ,"lazyLoading":true},
        { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 ,"lazyLoading":true}
      // {
      //     // width: '600px',
      //     // height: '400px',
      //     thumbnailsColumns: 3,
      //     imageAnimation: NgxGalleryAnimation.Slide,
      //     lazyLoading:true,
      //     thumbnailsMargin: 0, 
      //     thumbnailMargin: 0

      // },
      // // max-width 800
      // {
      //     breakpoint: 800,
      //     width: '100%',
      //     height: '600px',
      //     imagePercent: 80,
      //     thumbnailsPercent: 20,
      //     thumbnailsMargin: 20,
      //     thumbnailMargin: 20
      // },
      // // max-width 400
      // {
      //     breakpoint: 400,
      //     preview: false
      // }
  ];

  this.galleryImages = [
      {
          small: '../../../assets/img/header-bg.jpg',
          medium: '../../../assets/img/header-bg.jpg',
          big: '../../../assets/img/header-bg.jpg'
      },
      {
          small: '../../../assets/img/glug main new logo blue.png',
          medium: '../../../assets/img/glug main new logo blue.png',
          big: '../../../assets/img/glug main new logo blue.png'
      },
      {
          small: '../../../assets/img/glug 200 sc.jpg',
          medium: '../../../assets/img/glug 200 sc.jpg',
          big: '../../../assets/img/glug 200 sc.jpg'
      }
  ];
}
}


