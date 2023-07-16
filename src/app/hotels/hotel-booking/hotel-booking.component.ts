import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Hotel } from '../hotels.model';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'sun-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {
  hotel: Hotel;
  id: string;
  subscription: Subscription;

  constructor(
    private hotelsService: HotelsService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.hotel = this.hotelsService.getHotelbyId(params['id']);
        }
      )
  }

  onClose() {
    // this.route.navigate(['hotels']);
    this.route.navigate([{ outlets: { hotelBookingModal: null }}]);
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

}
