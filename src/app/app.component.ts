import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="pageWrapper">
      <header class="banner">
        Show of Forms
      </header>

      <nav class="navbar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="template">Template-Driven Example</a></li>
          <li><a routerLink="reactive">Reactive Example</a></li>
          <li><a routerLink="typed">Typed Example</a></li>
          <li><a routerLink="dynamic">Dynamic Example</a></li>
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
            <li><a routerLink="template">Template-Driven Example</a></li>
            <li><a routerLink="reactive">Reactive Example</a></li>
            <li><a routerLink="typed">Typed Example</a></li>
            <li><a routerLink="dynamic">Dynamic Example</a></li>
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
