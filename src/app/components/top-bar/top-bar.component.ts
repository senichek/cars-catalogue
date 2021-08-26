import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private filterService: FilterService,
    public router: Router,
    private carService: CarsService
    ) { }

  ngOnInit(): void {
  }

  toggleFilterForm() {
    this.filterService.toggleFilterForm();
  }

  toggleAddCarForm() {
    this.carService.toggleAddNewCarForm();
  }
}
