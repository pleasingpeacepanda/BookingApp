import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rentals = [{
    id: 1,
    title: 'Ark Apartment',
    city : 'New York',
    Street: 'Times Square',
    category: 'apartment',
    image: 'via.placeholdercom/350*250',
    bedrooms: 3,
    description: 'very good apartment',
    dailyRate: 360,
    shared: false,
    CreatedAt: '25/12/2018'
  },
  {
    id: 2,
    title: 'Sobha Apartment',
    city : 'New York',
    Street: 'Hide Square',
    category: 'apartment',
    image: 'via.placeholdercom/350*250',
    bedrooms: 3,
    description: 'very beautiful apartment',
    dailyRate: 340,
    shared: false,
    CreatedAt: '25/12/2018'
  },
  {
    id: 3,
    title: 'Prestige Apartment',
    city : 'chile',
    Street: 'Primes Square',
    category: 'apartment',
    image: 'via.placeholdercom/350*250',
    bedrooms: 3,
    description: 'very nice apartment',
    dailyRate: 300,
    shared: false,
    CreatedAt: '25/12/2018'
  },
  {
    id: 4,
    title: 'Prestige Apartment',
    city : 'U K',
    Street: 'Star Square',
    category: 'apartment',
    image: 'via.placeholdercom/350*250',
    bedrooms: 3,
    description: 'very luxirous apartment',
    dailyRate: 400,
    shared: false,
    CreatedAt: '25/12/2018'
  }
  ];

  constructor() {}
  getRentals(): any[] {
    return this.rentals;
  }
}
