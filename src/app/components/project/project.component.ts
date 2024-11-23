
import { Component, inject, Input, OnInit } from '@angular/core';
import { HelperService } from '../../service/helper.service';
import { Project } from '../../datatypes.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  @Input() darkMode: boolean = false;
  projects : Project[] = [{
    name: "Job Portal Project",
    githubUrl : "https://github.com/",
    gitIconUrl: "fa-brands fa-github",
    demoIcon: "fa-solid fa-arrow-up-right-from-square",
    hostingUrl : "http://localhost",
    description: "This Job Portal project is a using frontend angular and backend fastapi",
    features: [
      "Angular 16 to Angular 18 upgraded",
      "Mobile responsive"
    ]
  }]
  private helperService: HelperService = inject(HelperService);
  ngOnInit(): void {
    
  }

}
