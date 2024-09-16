
import { Component, inject, OnInit } from '@angular/core';
import { HelperService } from '../../service/helper.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  projects : any[] = []
  private helperService: HelperService = inject(HelperService);
  ngOnInit(): void {
    
  }

}
