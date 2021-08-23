import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Filter } from 'src/app/Filter';
import { Car } from 'src/app/Car';
import { FilteringPipe } from 'src/app/pipes/filtering.pipe';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  filterFormToggle: boolean = false;

  filterValuesSubject = new Subject<Filter>();

  filterToggleSubject = new Subject<any>();

  copyOfCars: Car[] = []

  constructor(private filteringPipe: FilteringPipe) {}

  // Sending the filter values between the filter and components/services;
  sendFilterValues(values: Filter) {
    this.filterValuesSubject.next(values);
  }

  filter(cars: Car[], filter: Filter) {
    // The filtering returns new modified array (the original array we get from DB will be damaged), this
    // is why we use copy of cars (copy of original array) here so that we do not have to fetch them from
    // the database each time we do the filtering.
    this.copyOfCars = cars;
    this.filteringPipe.transform(this.copyOfCars, filter);
  }

  toggleFilterForm() {
    this.filterFormToggle = !this.filterFormToggle;
    this.filterToggleSubject.next(this.filterFormToggle);
  }
}
