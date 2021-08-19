import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { Car } from 'src/app/Car';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Filter } from 'src/app/Filter';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css'],
})
export class FavoritesListComponent implements OnInit {
  favCars: Car[] = [];

  faTimes = faTimes;

  filterValues: Filter = {
    mdl: '',
    color: '',
    transmission: '',
    productionDate: '',
  };

  constructor(
    private carsService: CarsService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.favCars = this.carsService.getFavoriteCars();

    // As soon as something gets submitted to the filtering form the "subscribe" will react
    // and the filtering will be triggered;
    this.filterService.filterValuesSubject.subscribe((data) => {
      this.filterValues = data;
      this.filterService.filter(this.favCars, this.filterValues);
    });
  }

  deleteCarFromFavorites(car: Car) {
    this.carsService.deleteCarFromFavorites(car, this.favCars);
  }
}
