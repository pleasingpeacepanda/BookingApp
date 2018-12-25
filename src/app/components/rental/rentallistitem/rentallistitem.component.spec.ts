import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentallistitemComponent } from './rentallistitem.component';

describe('RentallistitemComponent', () => {
  let component: RentallistitemComponent;
  let fixture: ComponentFixture<RentallistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentallistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentallistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
