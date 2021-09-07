import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../Car';
import { GlobalVariable } from 'globals';
import { Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  private apiURL = GlobalVariable.CARS_API_URL;

  cars: Car[] = [];

  addCarToggleSubject = new Subject<any>();

  addNewCarFormToggle: boolean = false;

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiURL);
  }

  setFavoriteCars(carz: Car[]) {
    this.cars = carz;
  }

  getFavoriteCars(): Car[] {
    return this.cars;
  }

  deleteCarFromFavorites(car: Car, listOfCars: Car[]) {
      const index = listOfCars.indexOf(car);
      if (index > -1) {
        listOfCars.splice(index, 1);
      }
  }

  saveNewCarToDB(car: Car) {
    let jsonCar = JSON.stringify(car);
    return this.http.post<Car>(this.apiURL, jsonCar, httpOptions);
  }

  toggleAddNewCarForm() {
    this.addNewCarFormToggle = !this.addNewCarFormToggle;
    this.addCarToggleSubject.next(this.addNewCarFormToggle);
  }
}
