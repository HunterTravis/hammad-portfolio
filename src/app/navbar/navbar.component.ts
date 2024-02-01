import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar-container" >
      <div class="nav-bar-items">
          <img class="profile-image" src="/assets/images/HammadPicture.jpg" alt="">
          <div class="naviation-items">
            <h4>About Me</h4>
            <h4>Projects</h4>
            <h4>Skills</h4>
            <h4>Languages</h4>
            <h4>Resume</h4>
            <h4>Contact Me</h4>
            </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
