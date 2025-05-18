
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { HelperService } from '../../service/helper.service';
import { Project } from '../../datatypes.types';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, RouterModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  readonly panelOpenState = signal(false);
  @Input() darkMode: boolean = false;
  projects : Project[] = []
  private readonly helperService: HelperService = inject(HelperService);
  ngOnInit(): void {
    this.projects = this.helperService.getProjects();
  }

}
