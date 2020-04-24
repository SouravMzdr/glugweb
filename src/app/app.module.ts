import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { IntroComponent } from './home/intro/intro.component';
import { ServicesComponent } from './home/services/services.component';
// import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { ProjectsComponent } from './home/projects/projects.component'
import { TimelineComponent } from './home/timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './ui/footer/footer.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './home/team/team.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ServicesComponent,
    ProjectsComponent,
    TimelineComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
