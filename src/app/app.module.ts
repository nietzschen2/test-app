import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { PlaceholderCardsComponent } from './placeholder-cards/placeholder-cards.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NormalButtonComponent } from './normal-button/normal-button.component';
import { BasicBrandheaderComponent } from './basic-brandheader/basic-brandheader.component';
import { BasicLoginformComponent } from './basic-loginform/basic-loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonsComponent,
    MaterialToolbarComponent,
    PlaceholderCardsComponent,
    DatepickerComponent,
    NormalButtonComponent,
    BasicBrandheaderComponent,
    BasicLoginformComponent
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
