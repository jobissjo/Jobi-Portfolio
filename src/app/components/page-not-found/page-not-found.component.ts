import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HelperService } from '../../service/helper.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  isDarkMode = false;

  constructor() { }

  private readonly helperService: HelperService = inject(HelperService);

  ngOnInit(){
    this.helperService.darkMode$.subscribe(isDark => {      
      this.isDarkMode = isDark;
    })
  }

}
