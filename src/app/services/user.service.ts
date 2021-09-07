import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';
import { GlobalVariable } from 'globals';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private USERS_API_URL = GlobalVariable.USERS_API_URL;

  constructor(private http: HttpClient) {}

  /* saveNewUserToDB(user: User) {
    let jsonUser = JSON.stringify(user);
    return this.http
      .post<User>(this.USERS_API_URL, jsonUser, httpOptions)
      .subscribe(
        (response) => {
          console.log(
            'User response: ' + response.email + response.password + response.favCars
          );
        },
        (error) => {
          console.log('User error: ' + error);
        }
      );
  } */

  saveNewUserToDB(user: User) {
    let jsonUser = JSON.stringify(user);
    return this.http.post<User>(this.USERS_API_URL, jsonUser, httpOptions);
  }
}
