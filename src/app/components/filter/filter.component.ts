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

  // The object to store the filtering params that "filter" component will receive;
  filterObj = {
    "model": "",
    "color": "",
    "transmission": "",
    "productionDate": ""
  }

  // The filter object is pushed into an array so that *ngFor can iterate over it;
  /* filterParams: FilterParams = {
    "model": "",
    "color": "",
    "transmission": "",
    "productionDate": ""
  } */

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarsService
  ) { }

  ngOnInit(): void {
  }

  submitFilter(): void {
    // Process the filtering;
    //alert("Filter request is: " + this.filterForm.value.model);  

    if (this.filterForm.value.model != "") {
      this.filterObj.model = this.filterForm.value.model;
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
  }
   
}