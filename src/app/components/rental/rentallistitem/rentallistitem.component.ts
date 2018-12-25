import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rentallistitem',
  templateUrl: './rentallistitem.component.html',
  styleUrls: ['./rentallistitem.component.scss']
})
export class RentallistitemComponent implements OnInit {
@Input() CURRENTrental: any[];
  constructor() { }

  ngOnInit() {
  }

}
