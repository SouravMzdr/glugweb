import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PastEventsComponent } from './past-events/past-events.component';



const routes: Routes = [
  {path:'',component:PastEventsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastEventsRoutingModule { }
