import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Car } from '../Car';
import { FilterParams } from '../FilterParams';
import { GlobalVariable } from 'globals';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiURL = GlobalVariable.BASE_API_URL;

  filterParamsSubject = new Subject<FilterParams>();

  cars: Car[] = [];

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiURL);
  }

  // Sending the filter values between the filter and car-list components;
  sendFilterParams(params: FilterParams) {
    this.filterParamsSubject.next(params);
  }

  setFavoriteCars(carz: Car[]) {
     this.cars = carz;
  }

  getFavoriteCars(): Car[] {
    return this.cars;
  }
}
