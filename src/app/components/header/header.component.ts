import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { HelperService } from '../../service/helper.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-header',
    imports: [CommonModule, MatIconModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly helperService: HelperService = inject(HelperService);
  sections: string[] = [
    'about',
    'experience',
    'skill',
    'certification',
    'articles',
    'project',
    'contact'
  ]

  menuOpen = false;
  darkMode: boolean = true;

  constructor() {
    this.helperService.darkMode$.subscribe(isDark => {
      this.darkMode = isDark;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


  scrollToSection(section: string) {
    this.helperService.scrollToElement(section);
    this.menuOpen = !this.menuOpen;
  }

  // removed redundant manual emission since service handles state
  toggleDarkMode() {
    this.helperService.toggleDarkMode();
    // Local state will update via subscription
  }

}
