import { Component, inject, Input, OnInit } from '@angular/core';
import { Contact, Resume } from '../../datatypes.types';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { HelperService } from '../../service/helper.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  @Input() darkMode: boolean = false;
  contacts: Contact[] = [];
  resume!: Resume;
  contactForm!: FormGroup;
  isSubmitting: boolean = false;

  private helperService: HelperService = inject(HelperService);
  private fb: FormBuilder = inject(FormBuilder);
  private apiService: ApiService = inject(ApiService);

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
      const accentColor = this.darkMode ? '#7AA2E3' : '#5C80BC';
      const backgroundColor = this.darkMode ? '#1e1e1e' : '#ffffff';
      const textColor = this.darkMode ? '#e0e0e0' : '#1a1a1a';

      this.isSubmitting = true;
      this.apiService.postContactUsForm(this.contactForm.value).subscribe({
        next: (res) => {
          this.isSubmitting = false;
          console.log('Form Submitted!', res);
          this.contactForm.reset();

          Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for reaching out! I will get back to you soon.',
            icon: 'success',
            confirmButtonText: 'Great!',
            confirmButtonColor: accentColor,
            background: backgroundColor,
            color: textColor,
            iconColor: accentColor
          });
        },
        error: (err) => {
          this.isSubmitting = false;
          console.error('Submission Error:', err);
          Swal.fire({
            title: 'Oops...',
            text: 'Something went wrong. Please try again later.',
            icon: 'error',
            confirmButtonText: 'Close',
            confirmButtonColor: accentColor,
            background: backgroundColor,
            color: textColor
          });
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get emailContact(): Contact | undefined {
    return this.contacts.find(c => c.name.toLowerCase().includes('mail'));
  }
}
