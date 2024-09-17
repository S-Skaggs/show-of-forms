import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { MyTemplateFormComponent } from './my-template-form/my-template-form.component';
import { MyTypedFormComponent } from './my-typed-form/my-typed-form.component';
import { MyDynamicFormComponent } from './my-dynamic-form/my-dynamic-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'template',
    component: MyTemplateFormComponent
  },
  {
    path: 'reactive',
    component: MyReactiveFormComponent
  },
  {
    path: 'typed',
    component: MyTypedFormComponent
  },
  {
    path: 'dynamic',
    component: MyDynamicFormComponent
  }
];
