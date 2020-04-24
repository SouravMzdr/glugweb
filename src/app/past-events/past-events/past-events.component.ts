import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9'

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

  galleryOptions_bootcamp: NgxGalleryOptions[];
  galleryImages_bootcamp: NgxGalleryImage[];


  galleryOptions_linux: NgxGalleryOptions[];
  galleryImages_linux: NgxGalleryImage[];

  galleryOptions_cynsecure: NgxGalleryOptions[];
  galleryImages_cynsecure: NgxGalleryImage[];

  galleryOptions_legacy: NgxGalleryOptions[];
  galleryImages_legacy: NgxGalleryImage[];

  galleryOptions_starting: NgxGalleryOptions[];
  galleryImages_starting: NgxGalleryImage[];


  galleryOptions=[
    { "imagePercent": 80, "thumbnailsPercent": 20, "thumbnailsColumns": 4, "thumbnailsMargin": 0, "thumbnailMargin": 0,"lazyLoading":true},
    { "breakpoint": 500, "width": "100%", "height": "300px", "thumbnailsColumns": 3 ,"lazyLoading":true},
    { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 ,"lazyLoading":true}
  ];

  galleryOptionsHideThumbnails=[
    { "imagePercent": 80,"lazyLoading":true,"thumbnails":false},
    { "breakpoint": 500, "width": "100%", "height": "300px", "thumbnailsColumns": 3 ,"lazyLoading":true},
  ];

  ngOnInit() {

    this.galleryOptions_technovus = this.galleryOptions;
    this.galleryOptions_programmers= this.galleryOptions;
    this.galleryOptions_bootcamp= this.galleryOptions
    this.galleryOptions_linux= this.galleryOptionsHideThumbnails;
    this.galleryOptions_cynsecure = this.galleryOptions;
    this.galleryOptions_legacy = this.galleryOptions;
    this.galleryOptions_starting = this.galleryOptions;




  this.galleryImages_technovus = [
      {
          small: '../../../assets/img/events/codenovus 1.jpeg',
          medium: '../../../assets/img/events/codenovus 1.jpeg',
          big: '../../../assets/img/events/codenovus 1.jpeg'
      },
      {
          small: '../../../assets/img/events/codenovus 2.jpeg',
          medium: '../../../assets/img/events/codenovus 2.jpeg',
          big: '../../../assets/img/events/codenovus 2.jpeg'
      },
      {
          small: '../../../assets/img/events/codenovus 3.jpeg',
          medium: '../../../assets/img/events/codenovus 3.jpeg',
          big: '../../../assets/img/events/codenovus 3.jpeg'
      },
      {
        small: '../../../assets/img/events/wod 1.jpeg',
        medium: '../../../assets/img/events/wod 1.jpeg',
        big: '../../../assets/img/events/wod 1.jpeg'
      },
      {
        small: '../../../assets/img/events/wod 2.jpeg',
        medium: '../../../assets/img/events/wod 2.jpeg',
        big: '../../../assets/img/events/wod 2.jpeg'
      },
      {
        small: '../../../assets/img/events/wod 3.jpeg',
        medium: '../../../assets/img/events/wod 3.jpeg',
        big: '../../../assets/img/events/wod 3.jpeg'
      },
      {
        small: '../../../assets/img/events/wod 4.jpeg',
        medium: '../../../assets/img/events/wod 4.jpeg',
        big: '../../../assets/img/events/wod 4.jpeg'
      }
  ];


  this.galleryImages_programmers = [
    {
        small: '../../../assets/img/events/codingspree 1.jpeg',
        medium: '../../../assets/img/events/codingspree 1.jpeg',
        big: '../../../assets/img/events/codingspree 1.jpeg'
    },
    {
        small: '../../../assets/img/events/codingspree 2.jpeg',
        medium: '../../../assets/img/events/codingspree 2.jpeg',
        big: '../../../assets/img/events/codingspree 2.jpeg'
    },
    {
        small: '../../../assets/img/events/codingspree 3.jpeg',
        medium: '../../../assets/img/events/codingspree 3.jpeg',
        big: '../../../assets/img/events/codingspree 3.jpeg'
    },
    {
      small: '../../../assets/img/events/codingspree 4.jpeg',
      medium: '../../../assets/img/events/codingspree 4.jpeg',
      big: '../../../assets/img/events/codingspree 4.jpeg'
    },
    {
      small: '../../../assets/img/events/webinar 1.jpeg',
      medium: '../../../assets/img/events/webinar 1.jpeg',
      big: '../../../assets/img/events/webinar 1.jpeg'
    },
    {
      small: '../../../assets/img/events/webinar 2.jpeg',
      medium: '../../../assets/img/events/webinar 2.jpeg',
      big: '../../../assets/img/events/webinar 2.jpeg'
    }
  ]

  this.galleryImages_bootcamp= [
    {
        small: '../../../assets/img/events/pybootcamp1.jpeg',
        medium: '../../../assets/img/events/pybootcamp1.jpeg',
        big: '../../../assets/img/events/pybootcamp1.jpeg'
    },
    {
      small: '../../../assets/img/events/pybootcamp2.jpeg',
      medium: '../../../assets/img/events/pybootcamp2.jpeg',
      big: '../../../assets/img/events/pybootcamp2.jpeg'
    },
    {
        small: '../../../assets/img/events/compclass1.jpeg',
        medium: '../../../assets/img/events/compclass1.jpeg',
        big: '../../../assets/img/events/compclass1.jpeg'
    },
    {
      small: '../../../assets/img/events/compclass2.jpeg',
      medium: '../../../assets/img/events/compclass2.jpeg',
      big: '../../../assets/img/events/compclass2.jpeg'
    },
  ]
  this.galleryImages_linux= [
    {
        small: '../../../assets/img/events/linux1.jpeg',
        medium: '../../../assets/img/events/linux1.jpeg',
        big: '../../../assets/img/events/linux1.jpeg'
    },
    {
      small: '../../../assets/img/events/linux2.jpeg',
      medium: '../../../assets/img/events/linux2.jpeg',
      big: '../../../assets/img/events/linux2.jpeg'
    }
  ]

  this.galleryImages_cynsecure= [
    {
        small: '../../../assets/img/events/cynsecure1.jpeg',
        medium: '../../../assets/img/events/cynsecure1.jpeg',
        big: '../../../assets/img/events/cynsecure1.jpeg'
    },
    {
      small: '../../../assets/img/events/cynsecure2.jpeg',
      medium: '../../../assets/img/events/cynsecure2.jpeg',
      big: '../../../assets/img/events/cynsecure2.jpeg'
    },
    {
      small: '../../../assets/img/events/cynsecure3.jpeg',
      medium: '../../../assets/img/events/cynsecure3.jpeg',
      big: '../../../assets/img/events/cynsecure3.jpeg'
    },
    {
      small: '../../../assets/img/events/cynsecure4.jpeg',
      medium: '../../../assets/img/events/cynsecure4.jpeg',
      big: '../../../assets/img/events/cynsecure4.jpeg'
    }
  ]

  this.galleryImages_legacy = [
    {
        small: '../../../assets/img/events/legacy1.jpg',
        medium: '../../../assets/img/events/legacy1.jpg',
        big: '../../../assets/img/events/legacy1.jpg'
    },
    {
      small: '../../../assets/img/events/legacy2.jpg',
      medium: '../../../assets/img/events/legacy2.jpg',
      big: '../../../assets/img/events/legacy2.jpg'
    },
    {
      small: '../../../assets/img/events/legacy3.jpg',
      medium: '../../../assets/img/events/legacy3.jpg',
      big: '../../../assets/img/events/legacy3.jpg'
    },
    {
      small: '../../../assets/img/events/legacy4.jpg',
      medium: '../../../assets/img/events/legacy4.jpg',
      big: '../../../assets/img/events/legacy4.jpg'
    }
  ]

  this.galleryImages_starting = [
    {
        small: '../../../assets/img/events/starting1.jpg',
        medium: '../../../assets/img/events/starting1.jpg',
        big: '../../../assets/img/events/starting1.jpg'
    },
    {
      small: '../../../assets/img/events/starting2.jpg',
      medium: '../../../assets/img/events/starting2.jpg',
      big: '../../../assets/img/events/starting2.jpg'
    },
    {
      small: '../../../assets/img/events/starting3.jpeg',
      medium: '../../../assets/img/events/starting3.jpeg',
      big: '../../../assets/img/events/starting3.jpeg'
    },
    {
      small: '../../../assets/img/events/starting4.jpg',
      medium: '../../../assets/img/events/starting4.jpg',
      big: '../../../assets/img/events/starting4.jpg'
    },
    {
      small: '../../../assets/img/events/starting5.jpeg',
      medium: '../../../assets/img/events/starting5.jpeg',
      big: '../../../assets/img/events/starting5.jpeg'
    }
  ]

}
}


