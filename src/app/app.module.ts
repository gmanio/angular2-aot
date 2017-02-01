import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, MovieComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}