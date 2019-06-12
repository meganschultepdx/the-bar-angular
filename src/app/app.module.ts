import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule }  from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
