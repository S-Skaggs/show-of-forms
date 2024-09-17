import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <p>
      my-reactive-form works!
    </p>
  `,
  styles: `

  `
})
export class MyReactiveFormComponent {

}
