import { Component, inject, Input } from '@angular/core';
import { HelperService } from '../../service/helper.service';
import { Skill, SkillCategory } from '../../datatypes.types';
import { CommonModule } from '@angular/common';
import { AtroposDirective } from '../../directives/atropos.directive';

import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-skill',
    imports: [CommonModule, AtroposDirective, ScrollAnimationDirective],
    templateUrl: './skill.component.html',
    styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() darkMode: boolean = false;
  skills: Skill[] = [];
  private helperService: HelperService = inject(HelperService);
  selectedSkillCategory = 'all'
  skillCategories: string[] = ['all', ...Object.values(SkillCategory)];

  isActive = false;
  hasLoaded = false;

  onMouseEnter() {
    if (!this.hasLoaded) {
      this.isActive = true;
      this.hasLoaded = true;
    }
  }
  isMobile$: Observable<boolean>;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));

    this.isMobile$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

  }

  ngOnInit(): void {
    this.getSkills()
  }

  decideSkillUrl(skill: Skill){
    return this.isMobile ? skill.mobileImageUrl : skill.imageUrl

  }

  getSkills(category: string = 'all') {
    this.skills = this.helperService.getSkills(category)
  }
  trackById(index: number, skill: any): any {
    return skill.name;
  }

  changeCategory(category: string) {
    this.selectedSkillCategory = category;
    this.getSkills(this.selectedSkillCategory);
  }
}
