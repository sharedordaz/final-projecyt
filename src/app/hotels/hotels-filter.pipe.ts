import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from './hotels.model';

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {

  transform(hotels: Hotel[], term: string): any {
    let filteredHotels: Hotel[] = [];
    if (term && term.length > 0) {
      filteredHotels = hotels.filter(
        (hotel:Hotel) => hotel.hotelTitle.toLowerCase().includes(term.toLowerCase())
        // ||
        // hotel.hotelText.toLowerCase().includes(term.toLowerCase())
      );
    }
    if (filteredHotels.length < 1) {
      return hotels;
    }
    return filteredHotels;
  }

}
