import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface SelectInput {
  itemId: number;
  itemName: string;
};

@Component({
  selector: 'app-my-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    @if(this.errorMessage) {
      <div>{{ errorMessage }}</div>
    }

    @if(this.successMessage) {
      <div>{{ successMessage }}</div>
    }

    <div>
        <form [formGroup]="itemForm" (ngSubmit)="onSubmit()">
          <div>
            <label for="supplierId">Supplier</label>
            <select formControlName="supplierId" id="supplierId" name="supplierId">
              @for(supplier of this.supplierInput; track supplier) {
                <option value="{{ supplier.itemId }}">{{ supplier.itemName }}</option>
              }
            </select>
          </div>

          <div>
            <label for="categoryId">Category</label>
            <select formControlName="categoryId" id="categoryId" name="categoryId">
              @for(category of categoryInput; track category) {
                <option value="{{ category.itemId }}">{{ category.itemName }}</option>
              }
            </select>
          </div>

          <div>
            <label for="name">Name</label>
            <input type="text" formControlName="name" id="name" name="name" />
          </div>

          <div>
            <label for="description">Description</label>
            <input type="text" formControlName="description" id="description" name="description" />
          </div>

          <div>
            <label for="quantity">Quantity</label>
            <input type="number" formControlName="quantity" id="quantity" name="quantity" min="0" />
          </div>

          <div>
            <label for="price">Price</label>
            <input type="text" formControlName="price" id="price" name="price" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
    </div>
  `,
  styles: `

  `
})
export class MyReactiveFormComponent implements OnInit {
  // Declare variables
  errorMessage: string;
  successMessage: string;
  categoryInput: SelectInput[] = [];
  supplierInput: SelectInput[] = [];

  // Create the itemForm FormGroup
  itemForm = this.fb.group({
    supplierId: [null, Validators.required],
    categoryId: [null, Validators.required],
    name: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    description: ['', Validators.compose([Validators.maxLength(500)])],
    quantity: [0, Validators.compose([Validators.required, Validators.min(0)])],
    price: [0.01, Validators.compose([Validators.required, Validators.min(0.01), Validators.pattern('/^\d*\.?\d?\d?$/')])],
  });

  constructor(private fb: FormBuilder) {
    this.errorMessage = '';
    this.successMessage = '';
  }

  ngOnInit(): void {
    // Populate input arrays
    for(let i = 0; i < 5; i++) {
      this.categoryInput.push({itemId: i, itemName: `Category ${i}`});
      this.supplierInput.push({itemId: i, itemName: `Supplier ${i}`});
    }
  }

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    if(this.itemForm.invalid) {
      this.errorMessage = 'Fill out the form';
      return;
    }

    this.successMessage = 'You did it!';
  }
}
