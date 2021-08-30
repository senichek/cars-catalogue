import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news!: any[];

  mainSingleNews: any[] = [];

  rightSideNews: any[] = [];

  middleNews: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.news = data.articles;
      this.mainSingleNews[0] = data.articles[0];
      this.rightSideNews[0] = data.articles[1];
      this.rightSideNews[1] = data.articles[2];
      this.middleNews = data.articles.slice(3, 7);
    })
  }
}
