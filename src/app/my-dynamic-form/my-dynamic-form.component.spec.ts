import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDynamicFormComponent } from './my-dynamic-form.component';

describe('MyDynamicFormComponent', () => {
  let component: MyDynamicFormComponent;
  let fixture: ComponentFixture<MyDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDynamicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
