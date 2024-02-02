import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article!: Article;

  //article: Article;


  constructor() {

  }

  ngOnInit() {
    }

  voteUp(): boolean {
    this.article.voteUp();
    return false
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false
  }

}
