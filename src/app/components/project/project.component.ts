
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
  projects : Project[] = []
  private readonly helperService: HelperService = inject(HelperService);
  ngOnInit(): void {
    this.projects = this.helperService.getProjects();
  }

}
