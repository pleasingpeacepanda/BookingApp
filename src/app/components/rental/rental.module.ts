import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental.component';
import { NgModule } from '@angular/core';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentallistitemComponent } from './rentallistitem/rentallistitem.component';
import { RentalService } from './_services/rental.service';

 @NgModule({
declarations: [
RentalComponent,
RentalListingComponent,
RentallistitemComponent
],
imports: [
CommonModule
],
providers: [RentalService],
exports: [RentalComponent,
    RentalListingComponent,
    RentallistitemComponent ]
 })
 export class RentalModule { }
