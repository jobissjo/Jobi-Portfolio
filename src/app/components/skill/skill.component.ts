import { Component, inject, Input } from '@angular/core';
import { HelperService } from '../../service/helper.service';
import { Skill, SkillCategory } from '../../datatypes.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() darkMode: boolean = false;
  skills:Skill[] = [];
  private helperService:HelperService = inject(HelperService);
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

  ngOnInit(): void {
    this.getSkills()
  }

  getSkills(category:string= 'all'){
    this.skills = this.helperService.getSkills(category)
  }
  trackById(index: number, skill: any): any {
    return skill.name; 
  }

  changeCategory(category:string){
    this.selectedSkillCategory = category;
    this.getSkills(this.selectedSkillCategory);
  }
}
