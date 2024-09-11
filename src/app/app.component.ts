import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="pageWrapper">
      <header class="banner">
        Show of Forms
      </header>

      <nav class="navbar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a href="https://angular.dev/guide/forms" target="_blank">Forms in Angular&#8663;</a></li>
          <li><a href="https://angular.dev/guide/forms/reactive-forms" target="_blank">Reactive Forms&#8663;</a></li>
          <li><a href="https://angular.dev/guide/forms/form-validation" target="_blank">Validating Form Input&#8663;</a></li>
        </ul>
      </nav>

      <main class="main-content">
        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footerNav">
          <ul>
            <li><a routerLink="/">Home</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  `,
  styles: [
    ``
  ]
})
export class AppComponent {
  title = 'Show of Forms';
}
