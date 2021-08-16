import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { LoadPinComponent } from './pages/load-pin/load-pin.component';
import { StoreModule } from '@ngrx/store';
import { PropertiesComponent } from './pages/properties/properties.component';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoadPinComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      properties: appReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
