import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  //{ path: '', redirectTo: '/singers', pathMatch: 'full' }, //default route
  {
    path: 'artists', component: ArtistsComponent,
    children: []
  },

  {
    path: 'albums', component: AlbumsComponent,
    children: []
  },

  {
    path: 'songs', component: SongsComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
