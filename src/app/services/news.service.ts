import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from 'globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsApiURL = GlobalVariable.NEWS_API_URL;

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.newsApiURL);
  }
}
