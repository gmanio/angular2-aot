import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';
import {PageNotFoundComponent} from "./util/pagenotfound.component";
import {routingModule} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
