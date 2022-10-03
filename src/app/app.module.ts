import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PkmTopBarComponent } from './components/pkm-top-bar/pkm-top-bar.component';
import { PkmButtonComponent } from './components/pkm-button/pkm-button.component';
import { PkmFavButtonComponent } from './components/pkm-fav-button/pkm-fav-button.component';
import { PkmListComponent } from './components/pkm-list/pkm-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PkmTopBarComponent,
    PkmButtonComponent,
    PkmFavButtonComponent,
    PkmListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
