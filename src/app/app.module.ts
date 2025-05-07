import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { AboutComponent } from './components/about.component';
import { ResumeComponent } from './components/resume.component';
import { IntroComponent } from './components/intro.component';
import { ServicesComponent } from './components/services.component';
import { PortfolioComponent } from './components/portfolio.component';
import { ContactComponent } from './components/contact.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    AboutComponent,
    ResumeComponent,
    IntroComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
