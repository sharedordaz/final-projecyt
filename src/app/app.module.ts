import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsComponent } from './hotels/hotels.component';
import { GardenCourtComponent } from './garden-court/garden-court.component';
import { ResortsComponent } from './resorts/resorts.component';
import { WinRefService } from './win-ref.service';
import { HttpClientModule } from '@angular/common/http';
import { HotelEditComponent } from './hotels/hotel-edit/hotel-edit.component';
import { HotelsService } from './hotels/hotels.service';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { HotelsFilterPipe } from './hotels/hotels-filter.pipe';
import { HotelBookingComponent } from './hotels/hotel-booking/hotel-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelsComponent,
    GardenCourtComponent,
    ResortsComponent,
    HotelEditComponent,
    HotelDetailComponent,
    HotelsFilterPipe,
    HotelBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    HotelsService,
    WinRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
