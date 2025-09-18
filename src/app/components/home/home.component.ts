import { Component, HostListener, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, FooterComponent, ExperienceComponent, ContactComponent,
    ProjectComponent, SkillComponent, MainComponent, CommonModule, PackagesComponent, ArticlesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDarkMode:boolean = true;
  @ViewChild('header_component') headerComponent!: HeaderComponent;
  modeChanged(isDarkMode:boolean){
    this.isDarkMode = isDarkMode;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    
    const clickedElement = event.target as HTMLElement;
    const elementId = clickedElement.id;
    if(!['menu-toggle', 'menu-toggle-icon' ].includes(elementId)  && this.headerComponent.menuOpen){
      this.headerComponent.menuOpen = false;
    }
  }
}
