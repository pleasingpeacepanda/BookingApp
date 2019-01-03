import { RentalDetailComponent } from './components/rental/rental-detail/rental-detail.component';
import { RentalListingComponent } from './components/rental/rental-listing/rental-listing.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalModule } from './components/rental/rental.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/rentals', pathMatch: 'full' },
  { path: 'rentals', component: RentalComponent }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, RentalDetailComponent],
  imports: [
    BrowserModule,
    RentalModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
