import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/Car';
import { FilterParams } from 'src/app/FilterParams';
import { FilteringPipe } from 'src/app/pipes/filtering.pipe';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})

export class CarsListComponent implements OnInit {

  cars: Car[] = []; // keep this collection unchanged so
                    //that there is no need to get it from DB every time after filtering;

  filteredCars: Car[] = [];

  favouriteCars: Car[] = [];

  filterParams: FilterParams = {
    "mdl": "",
    "color": "",
    "transmission": "",
    "productionDate": ""
  }

  constructor(private carsService: CarsService, private filteringPipe: FilteringPipe) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe((carz) =>
      (this.cars = carz)
    )


    // Receiving filter params from "filter-component";
    this.carsService.filterParamsSubject.subscribe((data) => {

      this.filteredCars = this.cars;

      console.log("carsService.filterParamsSubject.subscribe was called;");
      this.filterParams = data;
      console.log(this.filterParams); // Удалить
      this.filteringPipe.transform(this.filteredCars, this.filterParams);
      console.log("CarListComponent's Transform was called;")
    })
  };

  /* addToFavorite(id: number) {
    this.cars.forEach(car => {
      if (car._id === id && !this.favouriteCars.includes(car)) {
        this.favouriteCars.push(car);
        car.liked = true;
      }
    })
    this.carsService.setFavoriteCars(this.favouriteCars);
    console.log(this.favouriteCars)
  } */

  addToFavorite(car: Car) {
      if (!this.favouriteCars.includes(car)) {
        this.favouriteCars.push(car);
        car.liked = true;
      }
    this.carsService.setFavoriteCars(this.favouriteCars);
    console.log(this.favouriteCars)
  }
}
