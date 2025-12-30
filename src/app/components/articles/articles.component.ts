import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelperService } from '../../service/helper.service';
import { Article, ArticleCategory } from '../../datatypes.types';



import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule, CommonModule, ScrollAnimationDirective],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  @Input() darkMode: boolean = false;
  articles: Article[] = [];
  private helperService: HelperService = inject(HelperService);
  selectedArticleCategory = 'all'
  articleCategories: string[] = ['all', ...Object.values(ArticleCategory)];

  isActive = false;
  hasLoaded = false;

  onMouseEnter() {
    if (!this.hasLoaded) {
      this.isActive = true;
      this.hasLoaded = true;
    }
  }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(category: string = 'all') {
    this.articles = this.helperService.getArticles(category)
  }

  trackById(index: number, article: any): any {
    return article.id;
  }

  changeCategory(category: string) {
    this.selectedArticleCategory = category;
    this.getArticles(this.selectedArticleCategory);
  }

  openArticle(url: string) {
    window.open(url, '_blank');
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date));
  }

  getReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }

}
