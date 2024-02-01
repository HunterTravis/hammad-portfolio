import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-portfolio-page',
    standalone: true,
    template: `
  <app-navbar></app-navbar>
  `,
    styleUrl: './portfolio-page.component.scss',
    imports: [NavbarComponent]
})
export class PortfolioPageComponent {

}
