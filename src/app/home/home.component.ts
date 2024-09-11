import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="pageHeader">
      <h1>Welcome to Show of Forms</h1>
    </section>

    <p>This is a little app I created for me to learn Angular's reactive and template-driven forms.</p>
  `,
  styles: [
    ``
  ]
})
export class HomeComponent {

}
