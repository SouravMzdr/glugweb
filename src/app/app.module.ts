import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { IntroComponent } from './home/intro/intro.component';
import { ServicesComponent } from './home/services/services.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './ui/footer/footer.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TeamComponent } from './home/team/team.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { PastEventsModule } from './past-events/past-events.module';

// import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ServicesComponent,
    PortfolioComponent,
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
    // AngularFontAwesomeModule,
    // PastEventsModule
    // HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
