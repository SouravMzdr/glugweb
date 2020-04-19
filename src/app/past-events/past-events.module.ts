import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastEventsComponent } from './past-events/past-events.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { PastEventsRoutingModule } from './past-events.routing';



@NgModule({
  declarations: [PastEventsComponent],
  imports: [
    CommonModule,
    NgxGalleryModule,
    PastEventsRoutingModule
  ]
})
export class PastEventsModule { }
