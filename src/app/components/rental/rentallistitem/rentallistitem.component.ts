import { Component, OnInit, Input } from '@angular/core';
import { Rental } from '../_model/rentalmodel';

@Component({
  selector: 'app-rentallistitem',
  templateUrl: './rentallistitem.component.html',
  styleUrls: ['./rentallistitem.component.scss']
})
export class RentallistitemComponent implements OnInit {
  @Input() rental: Rental[];
  constructor() {}

  ngOnInit() {}
}
