export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  language: string;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="form-container">
      <form class="test-form" #testForm="ngForm" (ngSubmit)="submitForm(); testForm.reset();">
        <fieldset>
          <legend>Test Form</legend>
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required [(ngModel)]="newUser.firstName" #firstName="ngModel">
          <div [hidden]="firstName.valid || firstName.pristine" class="error">
            First Name is required
          </div>

          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required [(ngModel)]="newUser.lastName" #lastName="ngModel">
          <div [hidden]="lastName.valid || lastName.pristine" class="error">
            Last Name is required
          </div>

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required [(ngModel)]="newUser.email" #email="ngModel">
          <div [hidden]="email.valid || email.pristine" class="error">
            Email is required
          </div>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" required [(ngModel)]="newUser.password" #password="ngModel">
          <div [hidden]="password.valid || password.pristine" class="error">
            Password is required
          </div>

          <label for="language">Preferred Language</label>
          <select id="language" name="language" required [(ngModel)]="newUser.language" #language="ngModel">
            <option value="">Please select a language</option>
            @for(lang of languages; track lang) {
              <option value="{{ lang }}">{{ lang }}</option>
            }
          </select>
          <div [hidden]="language.valid || language.pristine" class="error">
            Language is required
          </div>

          <input type="submit" value="Submit Data" [disabled]="!testForm.valid">
        </fieldset>
      </form>
    </div>

    @if (this.submittedUser.firstName != '') {
      <h3>Submitted Data</h3>
      <pre>{{ this.submittedUser | json }}</pre>
    }
  `,
  styles: ``
})
export class MyTemplateFormComponent {
  // Language options
  languages: string[] = [
    'English',
    'French',
    'German'
  ];

  // Declare variables including our User model
  newUser: User;
  submittedUser: User;

  constructor() {
    // Set initial values
    this.newUser = { firstName: '', lastName: '', email: '', password: '', language: '' }
    this.submittedUser = { firstName: '', lastName: '', email: '', password: '', language: '' }
  }

  submitForm() {
    // Save user data
    this.submittedUser = this.newUser;
    // Reset the form
    this.resetForm();
  }

  resetForm() {
    // Clear form values
    this.newUser = { firstName: '', lastName: '', email: '', password: '', language: '' }
  }
}
