import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/Car';
import { Filter } from 'src/app/Filter';
import { FilterService } from 'src/app/services/filter/filter.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
})
export class CarsListComponent implements OnInit {
  cars: Car[] = []; // keep this collection unchanged so
  //that there is no need to get it from DB every time after filtering;

  filteredCars: Car[] = [];

  favouriteCars: Car[] = [];

  filterValues: Filter = {
    mdl: '',
    color: '',
    transmission: '',
    productionDate: '',
  };

  savedSuccessfully: boolean = false;

  savingFailed: boolean = false;

  constructor(
    private carsService: CarsService,
    private filterService: FilterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe((carz) => (this.cars = carz));

    // As soon as something gets submitted to the filtering form the "subscribe" will react
    // and the filtering will be triggered;
    this.filterService.filterValuesSubject.subscribe((data) => {
      this.filterValues = data;
      this.filterService.filter(this.cars, this.filterValues);
      console.log('ngOnInit() in CarList was called;');
    });
  }

  addToFavorite(car: Car) {
    if (!this.favouriteCars.includes(car)) {
      this.favouriteCars.push(car);
      car.liked = true;
    } else {
      this.carsService.deleteCarFromFavorites(car, this.favouriteCars);
      car.liked = false;
    }
    this.carsService.setFavoriteCars(this.favouriteCars);
    console.log(this.favouriteCars);
  }

  saveNewCarToDB(car: Car) {
    console.log('saveNewCarToDB in CarListComp was called;');
    return this.carsService
      .saveNewCarToDB(car)
      .subscribe(
        (response) => {
          this.cars.push(response);
          this.savedSuccessfully = true;
          setTimeout(()=> {
            this.savedSuccessfully = false; // Removing the notification from the screen;
          }, 3000)
        },
        (error) => {
          this.savingFailed = true;
          setTimeout(()=> {
            this.savingFailed = false; // Removing the notification from the screen;
          }, 3000)
          console.log("Car was not pushed to DB. Error code = " + error.status);
        }
      );
  }
}
