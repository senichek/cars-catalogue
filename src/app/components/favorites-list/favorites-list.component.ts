import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
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
  ) {}

  ngOnInit(): void {
    this.favCars = this.carsService.getFavoriteCars();
  }

  deleteCarFromFavorites(car: Car) {
    this.carsService.deleteCarFromFavorites(car, this.favCars);
  }
}
