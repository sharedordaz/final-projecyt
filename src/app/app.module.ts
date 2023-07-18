import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WinRefService } from './win-ref.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';
import { DatabaseService } from './database.service';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlbumsComponent,
    SongsComponent,
    HomeComponent,
    ArtistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    WinRefService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
