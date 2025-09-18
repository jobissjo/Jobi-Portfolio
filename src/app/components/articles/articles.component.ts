import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Article {
  id: number;
  title: string;
  summary: string;
  publishedDate: Date;
  readTime: number;
  category: string;
  tags: string[];
  url: string;
  platform: 'medium' | 'dev.to' | 'personal' | 'linkedin';
  views?: string;
  likes?: number;
  featured: boolean;
  image?: string;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  articles: Article[] = [
    {
      id: 1,
      title: 'Building Scalable FastAPI Applications: Best Practices and Patterns',
      summary: 'Learn how to structure and scale FastAPI applications with proper architecture, dependency injection, and performance optimization techniques.',
      publishedDate: new Date('2024-12-10'),
      readTime: 8,
      category: 'Backend Development',
      tags: ['FastAPI', 'Python', 'Architecture', 'Performance'],
      url: 'https://medium.com/@jobiss/building-scalable-fastapi-applications',
      platform: 'medium',
      views: '2.3K',
      likes: 156,
      featured: true,
      image: 'assets/articles/fastapi-scalable.jpg'
    },
    {
      id: 2,
      title: 'Angular State Management: NgRx vs Akita vs RxJS',
      summary: 'A comprehensive comparison of state management solutions in Angular, with practical examples and performance considerations.',
      publishedDate: new Date('2024-11-28'),
      readTime: 12,
      category: 'Frontend Development',
      tags: ['Angular', 'NgRx', 'State Management', 'RxJS'],
      url: 'https://dev.to/jobiss/angular-state-management-comparison',
      platform: 'dev.to',
      views: '4.1K',
      likes: 203,
      featured: true,
      image: 'assets/articles/angular-state.jpg'
    },
    {
      id: 3,
      title: 'Implementing JWT Authentication with Refresh Tokens in FastAPI',
      summary: 'Step-by-step guide to implementing secure authentication with JWT tokens, refresh tokens, and proper security practices.',
      publishedDate: new Date('2024-11-15'),
      readTime: 10,
      category: 'Security',
      tags: ['JWT', 'Authentication', 'FastAPI', 'Security'],
      url: 'https://medium.com/@jobiss/jwt-authentication-fastapi',
      platform: 'medium',
      views: '1.8K',
      likes: 124,
      featured: false
    },
    {
      id: 4,
      title: 'Machine Learning Model Deployment with Docker and FastAPI',
      summary: 'Complete guide to containerizing and deploying ML models using Docker, FastAPI, and proper MLOps practices.',
      publishedDate: new Date('2024-10-30'),
      readTime: 15,
      category: 'Machine Learning',
      tags: ['ML', 'Docker', 'FastAPI', 'MLOps', 'Deployment'],
      url: 'https://dev.to/jobiss/ml-model-deployment-docker-fastapi',
      platform: 'dev.to',
      views: '3.2K',
      likes: 189,
      featured: false
    },
    {
      id: 5,
      title: 'Advanced Angular Patterns: Micro Frontend Architecture',
      summary: 'Exploring micro frontend patterns in Angular applications, including module federation and independent deployments.',
      publishedDate: new Date('2024-10-12'),
      readTime: 14,
      category: 'Architecture',
      tags: ['Angular', 'Micro Frontends', 'Architecture', 'Module Federation'],
      url: 'https://linkedin.com/pulse/angular-micro-frontend-jobiss',
      platform: 'linkedin',
      views: '1.5K',
      likes: 87,
      featured: false
    },
    {
      id: 6,
      title: 'Database Optimization Techniques for Django Applications',
      summary: 'Performance optimization strategies for Django applications including query optimization, indexing, and caching.',
      publishedDate: new Date('2024-09-25'),
      readTime: 11,
      category: 'Database',
      tags: ['Django', 'PostgreSQL', 'Performance', 'Optimization'],
      url: 'https://medium.com/@jobiss/django-database-optimization',
      platform: 'medium',
      views: '2.7K',
      likes: 145,
      featured: false
    }
  ];


  filteredArticles: Article[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';
  selectedPlatform: string = '';
  showFeaturedOnly: boolean = false;

  ngOnInit(): void {
    this.filteredArticles = this.articles;
  }

  filterArticles(): void {
    this.filteredArticles = this.articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           article.summary.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      const matchesCategory = !this.selectedCategory || article.category === this.selectedCategory;
      const matchesPlatform = !this.selectedPlatform || article.platform === this.selectedPlatform;
      const matchesFeatured = !this.showFeaturedOnly || article.featured;
      
      return matchesSearch && matchesCategory && matchesPlatform && matchesFeatured;
    });

    // Sort by date (newest first)
    this.filteredArticles.sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime());
  }

  getCategories(): string[] {
    const categories = this.articles.map(article => article.category);
    return [...new Set(categories)].sort();
  }

  getPlatforms(): string[] {
    const platforms = this.articles.map(article => article.platform);
    return [...new Set(platforms)].sort();
  }

  getPlatformIcon(platform: string): string {
    switch (platform) {
      case 'medium': return 'fab fa-medium';
      case 'dev.to': return 'fab fa-dev';
      case 'linkedin': return 'fab fa-linkedin';
      case 'personal': return 'fas fa-blog';
      default: return 'fas fa-link';
    }
  }

  getPlatformColor(platform: string): string {
    switch (platform) {
      case 'medium': return '#00ab6c';
      case 'dev.to': return '#0a0a0a';
      case 'linkedin': return '#0077b5';
      case 'personal': return '#007bff';
      default: return '#6c757d';
    }
  }

  onSearchChange(): void {
    this.filterArticles();
  }

  onCategoryChange(): void {
    this.filterArticles();
  }

  onPlatformChange(): void {
    this.filterArticles();
  }

  onFeaturedToggle(): void {
    this.filterArticles();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedPlatform = '';
    this.showFeaturedOnly = false;
    this.filteredArticles = this.articles;
  }

  trackByArticleId(index: number, article: Article): number {
    return article.id;
  }

  formatViews(views: string | undefined): string {
    return views || '0';
  }

  getReadTimeText(minutes: number): string {
    return `${minutes} min read`;
  }

}
