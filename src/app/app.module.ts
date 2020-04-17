import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';
import { MonsoonComponent } from './monsoon/monsoon.component';
import { MakeComponent } from './make/make.component';

@NgModule({
  declarations: [
    AppComponent,
    SummerComponent,
    WinterComponent,
    MonsoonComponent,
    MakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
