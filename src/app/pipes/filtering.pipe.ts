import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../Car';
import { Filter } from '../Filter';

// https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(value: Car[], filter: Filter): Car[] {
    console.log("FilteringPipe transform was called;")

    if (filter.mdl == "" && filter.color == ""
      && filter.transmission == "" && filter.productionDate == "") {
      console.log("Filter is empty");
      return value;

    } else {
      if (filter.mdl != "") {
        value = value.filter(car => car.model === filter.mdl);
      }
      if (filter.color != "") {
        value = value.filter(car => car.color === filter.color);
      }
      if (filter.transmission != "") {
        value = value.filter(car => car.transmission === filter.transmission);
      }
      if (filter.productionDate != "") {
        value = value.filter(car => car.productionDate.toLowerCase().includes(filter.productionDate.toLowerCase()));
      }
      return value;
    }
  }
}
