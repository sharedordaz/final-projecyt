import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenCourtComponent } from './garden-court/garden-court.component';
import { HotelBookingComponent } from './hotels/hotel-booking/hotel-booking.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { HotelEditComponent } from './hotels/hotel-edit/hotel-edit.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ResortsComponent } from './resorts/resorts.component';

const routes: Routes = [
  {path: '', redirectTo: '/hotels', pathMatch: 'full'}, //default route
  // {path: 'booking/:id', component: HotelBookingComponent, outlet: 'hotelBookingModal'},
  {path: 'hotels', component: HotelsComponent,
  children: [
    {path: 'booking/:id', component: HotelBookingComponent},
    {path: 'new', component: HotelEditComponent},
    {path: 'edit/:id', component: HotelDetailComponent},
  ]}, //hotel children routes

  {path: 'resorts', component: ResortsComponent,
  children: []}, //Resorts children routes

  {path: 'garden-courts', component: GardenCourtComponent,
  children: []}, //Garden Courts children routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
