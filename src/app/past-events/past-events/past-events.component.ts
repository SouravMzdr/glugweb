import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery'

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {

  constructor() { }

  galleryOptions_technovus: NgxGalleryOptions[];
  galleryImages_technovus: NgxGalleryImage[];

  galleryOptions_programmers: NgxGalleryOptions[];
  galleryImages_programmers: NgxGalleryImage[];

  galleryOptions=[
    { "imagePercent": 80, "thumbnailsPercent": 20, "thumbnailsColumns": 6, "thumbnailsMargin": 0, "thumbnailMargin": 0,"lazyLoading":true},
    { "breakpoint": 500, "width": "100%", "height": "300px", "thumbnailsColumns": 3 ,"lazyLoading":true},
    { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 ,"lazyLoading":true}
];

  ngOnInit() {

    this.galleryOptions_technovus = this.galleryOptions;
    this.galleryOptions_programmers= this.galleryOptions;

  this.galleryImages_technovus = [
      {
          small: '../../../assets/img/codenovus 1.jpeg',
          medium: '../../../assets/img/codenovus 1.jpeg',
          big: '../../../assets/img/codenovus 1.jpeg'
      },
      {
          small: '../../../assets/img/codenovus 2.jpeg',
          medium: '../../../assets/img/codenovus 2.jpeg',
          big: '../../../assets/img/codenovus 2.jpeg'
      },
      {
          small: '../../../assets/img/codenovus 3.jpeg',
          medium: '../../../assets/img/codenovus 3.jpeg',
          big: '../../../assets/img/codenovus 3.jpeg'
      },
      {
        small: '../../../assets/img/wod 1.jpeg',
        medium: '../../../assets/img/wod 1.jpeg',
        big: '../../../assets/img/wod 1.jpeg'
      },
      {
        small: '../../../assets/img/wod 2.jpeg',
        medium: '../../../assets/img/wod 2.jpeg',
        big: '../../../assets/img/wod 2.jpeg'
      },
      {
        small: '../../../assets/img/wod 3.jpeg',
        medium: '../../../assets/img/wod 3.jpeg',
        big: '../../../assets/img/wod 3.jpeg'
      },
      {
        small: '../../../assets/img/wod 4.jpeg',
        medium: '../../../assets/img/wod 4.jpeg',
        big: '../../../assets/img/wod 4.jpeg'
      }
  ];


  this.galleryImages_programmers = [
    {
        small: '../../../assets/img/codingspree 1.jpeg',
        medium: '../../../assets/img/codingspree 1.jpeg',
        big: '../../../assets/img/codingspree 1.jpeg'
    },
    {
        small: '../../../assets/img/codingspree 2.jpeg',
        medium: '../../../assets/img/codingspree 2.jpeg',
        big: '../../../assets/img/codingspree 2.jpeg'
    },
    {
        small: '../../../assets/img/codingspree 3.jpeg',
        medium: '../../../assets/img/codingspree 3.jpeg',
        big: '../../../assets/img/codingspree 3.jpeg'
    },
    {
      small: '../../../assets/img/codingspree 4.jpeg',
      medium: '../../../assets/img/codingspree 4.jpeg',
      big: '../../../assets/img/codingspree 4.jpeg'
    },
    {
      small: '../../../assets/img/webinar 1.jpeg',
      medium: '../../../assets/img/webinar 1.jpeg',
      big: '../../../assets/img/webinar 1.jpeg'
    },
    {
      small: '../../../assets/img/webinar 2.jpeg',
      medium: '../../../assets/img/webinar 2.jpeg',
      big: '../../../assets/img/webinar 2.jpeg'
    }
  ]
}
}


