import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormControl, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  @Input() language: 'de' | 'en' = 'de'
  unvalidField:boolean = false;








  constructor(private fb: FormBuilder) {}

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    policy: [false, [Validators.requiredTrue]],
  })

  async onSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset();

  }
}
