import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../newspaper.component';

@Component({
  selector: 'app-news-viewer',
  templateUrl: './news-viewer.component.html',
  styleUrls: ['./news-viewer.component.scss']
})
export class NewsViewerComponent implements OnInit {
  @Input() articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {

  }
}
