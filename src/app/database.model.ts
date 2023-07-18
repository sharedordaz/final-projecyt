export class Song {
  title: string;
  duration: string;

  constructor(title: string, duration: string) {
    this.title = title;
    this.duration = duration;
  }
}

export class Album {
  title: string;
  releaseYear: number | string;
  songs: Song[];

  constructor(title: string, releaseYear: number | string, songs: Song[]) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.songs = songs;
  }
}

export class Artist {
  name: string;
  genre: string;
  albums: Album[];

  constructor(name: string, genre: string, albums: Album[]) {
    this.name = name;
    this.genre = genre;
    this.albums = albums;
  }
}
