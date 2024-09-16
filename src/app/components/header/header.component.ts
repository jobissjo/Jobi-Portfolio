import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
    'skills',
    'contact'
  ]

  scrollToSection(section:string){
    this.helperService.scrollToElement(section)
  }

}
