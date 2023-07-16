import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hotel } from '../hotels.model';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'sun-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit, OnDestroy {
  originalHotel: Hotel;
  hotel: Hotel;
  editMode: boolean = false;
  id: string;
  subscription: Subscription;

  constructor(
    private hotelsService: HotelsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.subscription = this.route.params
      .subscribe (
        (params: Params) => {
          this.id = params['id'];
          if (this.id === null || this.id === undefined) {
            this.editMode = false;
            return;
          }
          this.originalHotel = this.hotelsService.getHotelbyId(this.id);

          if (this.originalHotel === undefined || this.originalHotel === null) {
            return;
          }
          this.editMode = true;
          this.hotel = JSON.parse(JSON.stringify(this.originalHotel));
        });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe;
  }

  onSubmit(form: NgForm) {
    let value = form.value;
    let newHotel = new Hotel(
      value.imageUrl,
      value.hotelTitle,
      value.hotelText,
      value.phone,
      value.email,
      value.hotelUrl
    )
    if (this.editMode) {
      //editmode mode Update method.
      this.hotelsService.updateHotelDetails(this.originalHotel, newHotel);
    }
    // else {
    //   // //add newHotel method
    //   // this.hotelsService.addNewHotel(newHotel);
    // }
    this.router.navigate(['hotels']);
  }

  onCancel() {
    this.router.navigate(['hotels']);
  }

  onDelete() {
    this.hotelsService.deleteHotel(this.hotel);
    this.router.navigate(['hotels']);
  }

}
