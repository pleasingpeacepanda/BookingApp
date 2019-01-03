import { Rental } from './../_model/rentalmodel';
import { RentalService } from './../_services/rental.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  currentId: number;
  rental: Rental;
  constructor(
    private route: ActivatedRoute,
    private rentalservice: RentalService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentId = params['rentalId'];
    });
    this.rentalservice.getDetail(this.currentId).subscribe(res => {
      this.rental = res;
    });
  }
}
