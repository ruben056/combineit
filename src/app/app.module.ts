import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WerkloosheidComponent } from './werkloosheid/werkloosheid.component';
import { JeugdvakantieComponent } from './jeugdvakantie/jeugdvakantie.component';

@NgModule({
  declarations: [
    AppComponent,
    WerkloosheidComponent,
    JeugdvakantieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
