import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { SingersComponent } from './singers/singers.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  //{ path: '', redirectTo: '/singers', pathMatch: 'full' }, //default route
  // {path: 'booking/:id', component: HotelBookingComponent, outlet: 'hotelBookingModal'},
  {
    path: 'singers', component: SingersComponent,
    children: []
  }, //hotel children routes

  {
    path: 'albums', component: AlbumsComponent,
    children: []
  }, //Resorts children routes

  {
    path: 'songs', component: SongsComponent,
    children: []
  }, //Garden Courts children routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
