import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Artist, Song, Album } from './database.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiURL = "http://localhost:3000/api/artists";
  private artists: Artist[] = [];

  constructor(private http: HttpClient) { }

  fetchArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.apiURL);
  }

  getArtists(): Artist[] {
    return this.artists;
  }

  setArtists(artists: Artist[]): void {
    this.artists = artists;
  }
}
