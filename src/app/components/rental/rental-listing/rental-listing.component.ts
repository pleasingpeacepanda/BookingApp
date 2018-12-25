import { RentalService } from './../_services/rental.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-listing',
  templateUrl: './rental-listing.component.html',
  styleUrls: ['./rental-listing.component.scss']
})
export class RentalListingComponent implements OnInit {
  rentals: any[];
  constructor(private rentalservice: RentalService) {}

  ngOnInit() {
    this.rentals = this.rentalservice.getRentals();
  }
}
