import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { HelperService } from '../../service/helper.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private helperService:HelperService = inject(HelperService)
  sections: string[] = [
    'about',
    'experience',
    'skill',
    'contact'
  ]

  scrollToSection(section:string){
    this.helperService.scrollToElement(section)
  }

  darkMode:boolean = true;

 modeChange = output<boolean>();

  toggleDarkMode(){
    this.darkMode = !this.darkMode
    this.modeChange.emit(this.darkMode);
  }

}
