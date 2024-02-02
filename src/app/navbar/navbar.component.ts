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
            <a href="#" class="--clr:#1e9bff"><span>About Me</span></a>
            <a href="#" class="--clr:#1e9bff"><span>Projects</span></a>
            <a href="#" class="--clr:#1e9bff"><span>Skills</span></a>
            <a href="#" class="--clr:#1e9bff"><span>Languages</span></a>
            <a href="#" class="--clr:#1e9bff"><span>Resume</span></a>
            <a href="#" class="--clr:#1e9bff"><span>Contact Me</span></a>

            </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
