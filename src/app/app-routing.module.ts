import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/hotels', pathMatch: 'full' }, //default route
  // {path: 'booking/:id', component: HotelBookingComponent, outlet: 'hotelBookingModal'},
  {
    path: 'hotels', component: ,
    children: [
      { path: 'booking/:id', component: },
      { path: 'new', component: },
      { path: 'edit/:id', component: },
    ]
  }, //hotel children routes

  {
    path: 'resorts', component: ,
    children: []
  }, //Resorts children routes

  {
    path: 'garden-courts', component: ,
    children: []
  }, //Garden Courts children routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
