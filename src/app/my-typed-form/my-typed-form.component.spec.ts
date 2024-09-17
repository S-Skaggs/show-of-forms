import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTypedFormComponent } from './my-typed-form.component';

describe('MyTypedFormComponent', () => {
  let component: MyTypedFormComponent;
  let fixture: ComponentFixture<MyTypedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTypedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
