import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { IntroComponent } from './ui/intro/intro.component';
import { ServicesComponent } from './ui/services/services.component';
import { PortfolioComponent } from './ui/portfolio/portfolio.component';
import { TimelineComponent } from './ui/timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './ui/footer/footer.component';
import { AboutComponent } from './ui/about/about.component';
import { HomeComponent } from './home/home.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    // PastEventsModule
    // HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
