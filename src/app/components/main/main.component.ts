import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-main',
    imports: [],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  text: string = 'Python Developer';
  displayedText: string = 'Python<br />Developer';
  typingSpeed: number = 150;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.displayedText = '';
      this.typeJobTitle();
    }
  }

  typeJobTitle(): void {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < this.text.length) {
        if (this.text[currentIndex] === ' ') {
          this.displayedText += '<br />';
        } else {
          this.displayedText += this.text[currentIndex];
        }
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }
}
