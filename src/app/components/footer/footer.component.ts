import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { HelperService } from '../../service/helper.service';

@Component({
    selector: 'app-footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() darkMode: boolean = false;
  currentYear: number = new Date().getFullYear();
  private helperService = inject(HelperService);
  readonly showJoTech = this.helperService.showJoTech;

  scrollToSection(id: string): void {
    this.helperService.scrollToElement(id);
  }
}
