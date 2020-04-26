import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {
    path: 'past-events',
    loadChildren: () => import('./past-events/past-events.module').then(m => m.PastEventsModule)
  },
  { path: "**",redirectTo:'' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
