import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { IntroComponent } from './ui/intro/intro.component';
import { ServicesComponent } from './ui/services/services.component';
import { PortfolioComponent } from './ui/portfolio/portfolio.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './ui/footer/footer.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
