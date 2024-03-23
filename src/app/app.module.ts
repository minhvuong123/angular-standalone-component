import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DetailsComponent } from './welcome/details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayComponent } from './dashboard/today/today.component';

@NgModule({
  declarations: [
    // AppComponent,
    // DetailsComponent,
    // WelcomeComponent
  
    AboutComponent,
    DashboardComponent,
    TodayComponent
  ],
  imports: [
    AppComponent,
    // WelcomeComponent,
    // DetailsComponent, // this is place to import standalone components, directives 
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
