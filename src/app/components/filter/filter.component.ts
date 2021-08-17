import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { FilterParams } from 'src/app/FilterParams';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() runCarFilter = new EventEmitter();

  filterForm = this.formBuilder.group({
    model: '',
    productionDate: '',
    color: '',
    transmission: ''
  });

  // The object to store the filtering params that "CarsListComponent" component will receive;
  filterObj = {
    "mdl": "",
    "color": "",
    "transmission": "",
    "productionDate": ""
  }

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarsService
  ) { }

  ngOnInit(): void {
  }

  submitFilter(): void {
    console.log("submitFilter() was called;")
    if (this.filterForm.value.model != "") {
      this.filterObj.mdl = this.filterForm.value.model;
    }

    if (this.filterForm.value.color != "") {
      this.filterObj.color = this.filterForm.value.color;
    }

    if (this.filterForm.value.transmission != "") {
      this.filterObj.transmission = this.filterForm.value.transmission;
    }

    if (this.filterForm.value.productionDate != "") {
      this.filterObj.productionDate = this.filterForm.value.productionDate;
    }

    this.carService.sendFilterParams(this.filterObj);

    // Clearing the filter;
    this.filterObj = {
      "mdl": "",
      "color": "",
      "transmission": "",
      "productionDate": ""
    }
  }
}
