import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // components, directives, pipes to import
    AppComponent
  ],
  imports: [ // other modules to import
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // for dependencies injection but a bit obsolete nowdays
  bootstrap: [AppComponent] // specific to the root module
})
export class AppModule { }
