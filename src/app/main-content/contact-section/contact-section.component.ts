import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  form: FormGroup;
  sending = false;
  sent = false;
  errorMsg = '';

  private formspreeEndpoint = environment.formspreeEndpoint;
  private recipientEmail = environment.recipientEmail;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      policy: [false, [Validators.requiredTrue]]
    });
  }

  async onSubmit() {
    this.errorMsg = '';
    this.sent = false;
    if (this.form.invalid) {
      this.errorMsg = 'Bitte füllen Sie alle Felder korrekt aus.';
      return;
    }

    this.sending = true;
    const { name, email, message } = this.form.value as {
      name: string; email: string; message: string;
    };

    try {
      if (this.formspreeEndpoint) {
        const fd = new FormData();
        fd.append('name', name);
        fd.append('email', email);
        fd.append('message', message);

        const res = await fetch(this.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: fd
        });
        if (!res.ok) throw new Error('Senden fehlgeschlagen');
        this.sent = true;
        this.form.reset();
      } else {
        const subject = `Neue Nachricht von ${name}`;
        const body = `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`;
        const mailto = `mailto:${this.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        this.sent = true;
        this.form.reset();
      }
    } catch (err) {
      this.errorMsg = 'Beim Senden ist ein Fehler aufgetreten.';
    } finally {
      this.sending = false;
    }
  }
}
