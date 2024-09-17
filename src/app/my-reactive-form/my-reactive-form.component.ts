import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="form-container">
      <form [formGroup]="testForm" (ngSubmit)="submitForm()" class="test-form">
        <fieldset>
          <legend>Test Form</legend>
          <label for="firstName">First Name</label>
          <input formControlName="firstName" type="text" id="firstName" name="firstName">
          <!-- @if(testForm.controls['firstName'].touched && testForm.controls['firstName'].hasError('required')) {
            <small class="error">First Name is required.</small>
          } -->

          <label for="lastName">Last Name</label>
          <input formControlName="lastName" type="text" id="lastName" name="lastName">
          <!-- @if(testForm.controls['lastName'].touched && testForm.controls['lastName'].hasError('required')) {
            <small class="error">Last Name is required.</small>
          } -->

          <label for="email">Email</label>
          <input formControlName="email" type="email" id="email" name="email">
          @if(testForm.controls['email'].touched && testForm.controls['email'].hasError('required')) {
            <small class="error">Email is required.</small>
          }
          @if(testForm.controls['email'].touched && testForm.controls['email'].hasError('email')) {
            <small class="error">Invalid email address.</small>
          }

          <label for="password">Password</label>
          <input formControlName="password" type="password" id="password" name="password">
          @if(testForm.controls['password'].touched && testForm.controls['password'].hasError('required')) {
            <small class="error">Password must be at least 9 characters long and contain at least one uppercase letter and one number..</small>
          }
          @if(testForm.controls['password'].touched && testForm.controls['password'].hasError('pattern')) {
            <small class="error">Password is required.</small>
          }

          <label for="language">Preferred Language</label>
          <select formControlName="language" id="language" name="language">
            <option value="">Please select a language</option>
            @for(lang of languages; track lang) {
              <option value="{{ lang }}">{{ lang }}</option>
            }
          </select>
          <!-- @if(testForm.controls['languages'].touched && testForm.controls['languages'].hasError('required')) {
            <small class="error">Preferred language is required.</small>
          } -->

          <input type="submit" [disabled]="!testForm.valid" value="Submit Data">
        </fieldset>
      </form>
    </div>
    <pre>{{ testForm.value | json }}</pre>
  `,
  styles: `

  `
})
export class MyReactiveFormComponent {
  testForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
    }),
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)])],
    language: [null, Validators.compose([Validators.required])]
  });

  languages: string[] = [
    'English',
    'French',
    'German'
  ];

  constructor(private formBuilder: FormBuilder){}

  submitForm() {}
}
