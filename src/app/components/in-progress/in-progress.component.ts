import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HelperService } from '../../service/helper.service';

@Component({
    selector: 'app-in-progress',
    imports: [MatIconModule, MatButtonModule, CommonModule, MatCardModule,
        RouterModule
    ],
    templateUrl: './in-progress.component.html',
    styleUrl: './in-progress.component.scss'
})
export class InProgressComponent {
  isDarkMode = false;

  constructor(private readonly helperService: HelperService){

  }
  ngOnInit(){
    this.helperService.darkMode$.subscribe(isDark => {      
      this.isDarkMode = isDark;
    })
  }

}
