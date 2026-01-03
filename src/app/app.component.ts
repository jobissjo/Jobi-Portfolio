import { AfterViewInit, Component, OnInit, PLATFORM_ID, inject as angularInject } from '@angular/core';
import { inject } from "@vercel/analytics"
import { RouterModule } from '@angular/router';
import { CursorComponent } from './components/cursor/cursor.component';
import { ChatbotWidgetComponent } from './components/chatbot-widget/chatbot-widget.component';
import { ApiService } from './service/api.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
    selector: 'app-root',
    imports: [RouterModule, CursorComponent, ChatbotWidgetComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'jobi-portfolio';
  private apiService: ApiService = angularInject(ApiService);
  private platformId = angularInject(PLATFORM_ID);
  ngOnInit(): void {
    inject();

  }
  ngAfterViewInit(): void {
    isPlatformBrowser(this.platformId) && this.apiService.wakeUp().subscribe();
  }
}
