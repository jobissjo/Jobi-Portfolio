import { Component, inject, Input, OnInit } from '@angular/core';
import { Contact, Resume } from '../../datatypes.types';
import { CommonModule } from '@angular/common';
import { HelperService } from '../../service/helper.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  @Input() darkMode: boolean = false;
  contacts: Contact[] = [];
  resume!: Resume;
  contactForm!: FormGroup;

  private helperService: HelperService = inject(HelperService);
  private fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.contacts = this.helperService.getContacts();
    this.resume = this.helperService.getResume();

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      // Here you would typically send the data to a backend
      this.contactForm.reset();
      alert('Thank you for your message! I will get back to you soon.');
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get emailContact(): Contact | undefined {
    return this.contacts.find(c => c.name.toLowerCase().includes('mail'));
  }
}
