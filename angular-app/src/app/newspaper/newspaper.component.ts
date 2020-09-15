import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.scss']
})
export class NewspaperComponent implements OnInit {
  // Contador de IDS para que sea consecutivos
  public lastArticleId: number = 0;

  public articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public saveNewArticle(article: Article) {
    // Asigno un ID
    this.lastArticleId++;
    article.id = this.lastArticleId;

    // Guardo la noticia
    this.articles.push(article);
  }
}

export interface Article {
  id: number;
  title: string;
  author: string;
  url: string;
  text: string;
}
