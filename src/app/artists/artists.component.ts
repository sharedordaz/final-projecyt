import { Component, OnInit } from '@angular/core';
import { Album, Artist, Song } from '../database.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'sun-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];
  constructor(private artistService: DatabaseService) { }

  ngOnInit(): void {
    this.artistService.fetchArtists().subscribe(
      (data) => {
        this.artists = data;
        this.artistService.setArtists(data);
      },
      (error) => {
        console.error("Error fetching artists", error);
      }
    )
  }

}
