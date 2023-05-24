import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movie-card/movie-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
