import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PkmTopBarComponent } from './components/pkm-top-bar/pkm-top-bar.component';
import { PkmButtonComponent } from './components/pkm-button/pkm-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PkmTopBarComponent,
    PkmButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
