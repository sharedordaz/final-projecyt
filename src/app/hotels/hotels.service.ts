import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";


import { Hotel } from "./hotels.model";


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotelChangedEvent = new Subject<Hotel[]>();
  hotelSelectedEvent = new Subject<Hotel>();

  private hotels: Hotel[] = [];
  hotelCardsClone: Hotel[];

  constructor(private http: HttpClient) { }

  getHotelUpdateListener() {
    return this.hotelChangedEvent.asObservable();
  }

  // Fetch request for sun hotels to Backend API
  getHotels() {
    this.http.get<{message: string; hotels: Hotel[]}>('http://localhost:3000/api/hotels' )
      .subscribe({
        next: (response) => {
          this.hotels = response.hotels;
          // console.log(response.message);
          // console.log(response.hotels);
          this.sortAndSend();
        }
      });
  }

  addNewHotel(hotel: Hotel) {
    if (!hotel) {
      return;
    }
    hotel.id = '';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // add to Backend API
    this.http.post<{message: string, hotel: Hotel}>('http://localhost:3000/api/hotels', hotel, {headers: headers})
      .subscribe(
        (response)=> {
          this.hotels.push(response.hotel);
          console.log(response.hotel);
          this.sortAndSend();
        }
      )
  }

  getHotelbyId(id: string): Hotel {
    for (const hotel of this.hotels.slice()) {
      if (hotel.id === id) {
        return hotel;
      }
    }
  }
//  Update Hotel in Backend API
  updateHotelDetails(originalHotel: Hotel, newHotel: Hotel) {
    if (!originalHotel || !newHotel) {
      return;
    }
    const pos = this.hotels.findIndex(h => h.id === originalHotel.id);

    if(pos < 0) {
      return;
    }
    // set parameter so that update will occur rather than addNewHotel()
    newHotel.id = originalHotel.id;
    newHotel._id = originalHotel._id;

    // set headers to JSON
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('PreflightContinue', 'true');
    // send PUT request to backend APi
    this.http.put('http://localhost:3000/api/hotels/' + originalHotel.id,
    newHotel, { headers: headers })
    .subscribe({
      next: (res) => {
        this.hotels[pos] = newHotel;
        this.sortAndSend();
      }
    });
  };

  deleteHotel(hotel: Hotel) {
    if (!hotel) {
      return;
    }
    const pos = this.hotels.findIndex(h => h.id === hotel.id);

    if (pos < 0) {
      return
    }
    // Call delete method from backend
    this.http.delete('http://localhost:3000/api/hotels/' + hotel.id)
      .subscribe({
        next: (res) => {
          this.hotels.splice(pos,1)
          this.sortAndSend()
        }
      });
  }


  sortAndSend() {
    this.hotels.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    this.hotelChangedEvent.next(this.hotels.slice());
  }


}
