import { Component, inject, Input, OnInit } from '@angular/core';
import { Experience } from '../../datatypes.types';
import { HelperService } from '../../service/helper.service';
import { CommonModule } from '@angular/common';

import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
    selector: 'app-experience',
    imports: [CommonModule, ScrollAnimationDirective],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  @Input() darkMode: boolean = false;
  experiences: Experience[] = [];
  todayDate = new Date();
  private helperService: HelperService = inject(HelperService);

  ngOnInit() {
    this.experiences = this.helperService.getExperience();
    this.experiences.reverse()
  }

}
