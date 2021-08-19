import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';
import { Filter } from 'src/app/Filter';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterForm = this.formBuilder.group({
    model: '',
    productionDate: '',
    color: '',
    transmission: ''
  });

  filter: Filter = {
    "mdl": "",
    "color": "",
    "transmission": "",
    "productionDate": ""
  }

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarsService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
  }

  submitFilter(): void {
    console.log("submitFilter() was called;")
    if (this.filterForm.value.model != "") {
      this.filter.mdl = this.filterForm.value.model;
    }

    if (this.filterForm.value.color != "") {
      this.filter.color = this.filterForm.value.color;
    }

    if (this.filterForm.value.transmission != "") {
      this.filter.transmission = this.filterForm.value.transmission;
    }

    if (this.filterForm.value.productionDate != "") {
      this.filter.productionDate = this.filterForm.value.productionDate;
    }

    this.filterService.sendFilterValues(this.filter);

    // Clearing the filter;
    this.filter = {
      "mdl": "",
      "color": "",
      "transmission": "",
      "productionDate": ""
    }
  }
}
