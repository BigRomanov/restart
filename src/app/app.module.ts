import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TripService, ApiService} from './shared';
import { HeaderComponent } from './header/header.component';
import { TripListComponent } from './trip-list/trip-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  	ApiService,
  	TripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
