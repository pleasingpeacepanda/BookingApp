import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental.component';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'ngx-pipes';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentallistitemComponent } from './rentallistitem/rentallistitem.component';
import { RentalService } from './_services/rental.service';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      { path: '', component: RentalListingComponent },
      { path: ':rentalId', component: RentalDetailComponent }
    ]
  }
];
@NgModule({
  declarations: [
    RentalComponent,
    RentalListingComponent,
    RentallistitemComponent
  ],
  imports: [CommonModule, NgPipesModule, RouterModule.forChild(routes)],
  providers: [RentalService],
  exports: [RentalComponent, RentalListingComponent, RentallistitemComponent]
})
export class RentalModule {}
