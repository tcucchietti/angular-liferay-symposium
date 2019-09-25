import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: environment.base_href}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
