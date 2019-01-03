import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rental } from '../_model/rentalmodel';
import { Observable } from '../../../../../node_modules/rxjs';
import { Configuraton } from '../../../shared/config';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  constructor(private http: HttpClient) {}
  getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(Configuraton.apiurl + Configuraton.rentals);
  }
  getDetail(rentalId: number): Observable<Rental> {
    return this.http.get<Rental>(
      Configuraton.apiurl + Configuraton.rentals + '/' + rentalId + '/'
    );
  }
}
