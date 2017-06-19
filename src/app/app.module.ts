import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonsComponent,
    MaterialToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
