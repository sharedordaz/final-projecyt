import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from './hotels.model';
import { HotelsService } from './hotels.service';
import { Router } from "@angular/router";

@Component({
  selector: 'sun-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit, OnDestroy {
  hotels: Hotel[] = [];
  private subscription: Subscription;

  term: string;

  constructor(public hotelsService: HotelsService,
            private router: Router) { }

  ngOnInit(): void {
    this.hotelsService.getHotels();
    this.subscription = this.hotelsService.getHotelUpdateListener()
      .subscribe((hotels: Hotel[]) => {
        this.hotels = hotels;
      });

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }


  search(value: string) {
    this.term = value;
  }

}
