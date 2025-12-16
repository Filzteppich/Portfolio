import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
    socialIcons = [{
    name : 'gitHub',
    icon : 'assets/icons/social-icons/Github_button.svg',
    link : ''
  },{
    name : 'mail',
    icon : 'assets/icons/social-icons/Email_button.svg',
    link : ''
  },{
    name : 'linkedIn',
    icon : 'assets/icons/social-icons/Linkedin_button.svg',
    link : ''
  },]
}
