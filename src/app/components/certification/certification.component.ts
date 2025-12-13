import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { HelperService } from '../../service/helper.service';
import { Certification } from '../../datatypes.types';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.scss'
})
export class CertificationComponent implements OnInit {
  @Input() darkMode: boolean = false;
  certifications: Certification[] = [];
  private helperService: HelperService = inject(HelperService);

  ngOnInit(): void {
    this.certifications = this.helperService.getCertifications();
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date));
  }
}
