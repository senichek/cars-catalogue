import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Car } from 'src/app/Car';
import { CarsService } from 'src/app/services/cars.service';
import { CarsListComponent } from '../cars-list/cars-list.component';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css'],
})
export class AddNewCarComponent implements OnInit {

  model!: NgbDateStruct;

  addCarFormToggle!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private carListComp: CarsListComponent,
    private carService: CarsService
  ) {}

  addNewCarForm = this.formBuilder.group({
    model: '',
    color: '',
    description: '',
    transmission: '',
    productionDate: '',
    image: '',
  });

  car: Car = {
    description: '',
    model: '',
    color: '',
    transmission: '',
    productionDate: '',
    image: '',
    liked: false,
  };

  ngOnInit(): void {
    this.carService.addCarToggleSubject.subscribe((data) => {
      this.addCarFormToggle = data;
      console.log("ngOnInit() of filterComp was called; " + this.addCarFormToggle)
    })
  }

  saveNewCarToDB() {
    console.log('AddNewCarComponent.saveNewCarToDB() was called;');
    if (this.addNewCarForm.value.model != '') {
      this.car.model = this.addNewCarForm.value.model;
    }

    if (this.addNewCarForm.value.color != '') {
      this.car.color = this.addNewCarForm.value.color;
    }

    if (this.addNewCarForm.value.transmission != '') {
      this.car.transmission = this.addNewCarForm.value.transmission;
    }

    if (this.addNewCarForm.value.description != '') {
      this.car.description = this.addNewCarForm.value.description;
    }

    if (this.addNewCarForm.value.productionDate != '') {
      /* This is how to convert the date from the DatePicker to the format we may use:
      https://ng-bootstrap.github.io/#/components/datepicker/overview */
      let prodDate = JSON.parse(JSON.stringify(this.addNewCarForm.value.productionDate))
      this.car.productionDate = prodDate;
    }

    if (this.addNewCarForm.value.image != '') {
      this.car.image = this.addNewCarForm.value.image;
    } else {
      this.car.image =
        'https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=6&m=922962354&s=612x612&w=0&h=_KKNzEwxMkutv-DtQ4f54yA5nc39Ojb_KPvoV__aHyU=';
    }
    this.carListComp.saveNewCarToDB(this.car);
    // Clearing the form window;
    this.addNewCarForm.reset();
  }
}
