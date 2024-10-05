import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectComponent } from '../project/project.component';
import { SkillComponent } from '../skill/skill.component';
import { MainComponent } from '../main/main.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, FooterComponent, ExperienceComponent, ContactComponent,
    ProjectComponent, SkillComponent, MainComponent, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDarkMode:boolean = false;
  modeChanged(isDarkMode:boolean){
    this.isDarkMode = isDarkMode;
  }
}
