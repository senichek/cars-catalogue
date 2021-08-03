import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from "@angular/common/http"
import {Car} from '../car';
import { GlobalVariable } from 'globals';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiURL = GlobalVariable.BASE_API_URL;

  cars: Car[] = [];

  constructor(private http:HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiURL);
  }
}
