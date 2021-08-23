import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private filterService: FilterService, public router: Router) { }

  ngOnInit(): void {
  }

  toggleFilterForm() {
    this.filterService.toggleFilterForm();
  }
}
