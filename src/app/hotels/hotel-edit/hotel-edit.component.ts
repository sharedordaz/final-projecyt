import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotels.model';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'sun-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {
  hotel: Hotel;
   editMode: boolean = false;
   id: string;

  constructor(
    private hotelsService: HotelsService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
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
    } else {
      //add newHotel method
      this.hotelsService.addNewHotel(newHotel);
    }
    this.router.navigate(['hotels'])
  }

  onCancel() {
    this.router.navigate(['hotels']);
  }

}
