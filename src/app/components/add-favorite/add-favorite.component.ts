import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Car } from 'src/app/Car';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css']
})
export class AddFavoriteComponent implements OnInit {

  @Input() car!: Car;

  faHeart = faHeart;

  @Output() addOrRemoveFromFavorite = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
