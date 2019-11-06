import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainComponent} from './components/main/main.component';
import {ContainerComponent} from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
