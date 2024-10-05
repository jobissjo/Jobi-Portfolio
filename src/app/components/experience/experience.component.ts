import { Component, inject, Input, OnInit } from '@angular/core';
import { Experience } from '../../datatypes.types';
import { HelperService } from '../../service/helper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit{
  @Input() darkMode:boolean = false;
  experiences: Experience[] = [];
  todayDate = new Date();
  private helperService:HelperService = inject(HelperService);

  ngOnInit(){
    this.experiences = this.helperService.getExperience();
    this.experiences.reverse()
  }

}
