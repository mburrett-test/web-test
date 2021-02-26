import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {StartComponent} from './components/start/start.component';
import {FirstComponent} from './components/first/first.component';
import {SecondComponent} from './components/second/second.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, StartComponent, FirstComponent, SecondComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
