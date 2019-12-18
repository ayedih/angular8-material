import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
