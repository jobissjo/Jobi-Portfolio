import { Component, inject, OnInit } from '@angular/core';
import { Contact, Resume } from '../../datatypes.types';
import { CommonModule } from '@angular/common';
import { HelperService } from '../../service/helper.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  contacts: Contact[] = []
  resume!: Resume;
  private helperService:HelperService = inject(HelperService);

  ngOnInit(): void {
    this.contacts = this.helperService.getContacts();
    this.resume = this.helperService.getResume();
  }

}
