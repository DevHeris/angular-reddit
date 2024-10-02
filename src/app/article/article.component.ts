import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {}

  // ngOnChanges() {
  //   console.log(this.article);
  // }

  voteUp(): boolean {
    this.article.votes++;
    return false;
  }

  voteDown(): boolean {
    this.article.votes--;
    return false;
  }
}
