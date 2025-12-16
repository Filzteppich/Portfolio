import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
