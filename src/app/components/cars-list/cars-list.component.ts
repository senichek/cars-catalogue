import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/car';
import { FilterParams } from 'src/app/FilterParams';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[] = [];

  filterParams!: FilterParams;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe((carz) =>
      (this.cars = carz)
    )
    // Receiving filter params from "filter-component";
    this.carsService.filterParamsSubject.subscribe((data) => {
      this.filterParams = data;
      console.log(this.filterParams);
    })
  };
}
