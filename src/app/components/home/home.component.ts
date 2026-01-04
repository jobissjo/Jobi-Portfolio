import { Component, HostListener, ViewChild, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectComponent } from '../project/project.component';
import { SkillComponent } from '../skill/skill.component';
import { MainComponent } from '../main/main.component';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from '../packages/packages.component';
import { ArticlesComponent } from '../articles/articles.component';
import { CertificationComponent } from '../certification/certification.component';
import { HelperService } from '../../service/helper.service';

import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { SectionPlaceholderComponent } from '../section-placeholder/section-placeholder.component';

@Component({
    selector: 'app-home',
    imports: [HeaderComponent, AboutComponent, FooterComponent, ExperienceComponent, ContactComponent,
        ProjectComponent, SkillComponent, MainComponent, CommonModule,  ArticlesComponent, CertificationComponent,
        ScrollAnimationDirective, SectionPlaceholderComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly helperService: HelperService = inject(HelperService);
  isDarkMode: boolean = true;

  @ViewChild('header_component') headerComponent!: HeaderComponent;

  constructor() {
    this.helperService.darkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {

    const clickedElement = event.target as HTMLElement;
    const elementId = clickedElement.id;
    if (!['menu-toggle', 'menu-toggle-icon'].includes(elementId) && this.headerComponent.menuOpen) {
      this.headerComponent.menuOpen = false;
    }
  }
}
