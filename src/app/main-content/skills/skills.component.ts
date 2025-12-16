import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [{
    name: 'HTML',
    image: '/assets/icons/skill-icons/html-logo.webp'
  },{
    name: 'CSS',
    image: '/assets/icons/skill-icons/css-logo.png'
  },{
    name: 'JavaScript',
    image: '/assets/icons/skill-icons/javascript-logo.png'
  },{
    name: 'TypeScript',
    image: '/assets/icons/skill-icons/typescript-logo.png'
  },{
    name: 'Angular',
    image: '/assets/icons/skill-icons/angular-logo.png'
  },{
    name: 'Firebase',
    image: '/assets/icons/skill-icons/firebase-logo.png'
  },{
    name: 'Git',
    image: '/assets/icons/skill-icons/git-icon.svg.png'
  },{
    name: 'Rest API',
    image: '/assets/icons/skill-icons/api.svg'
  },{
    name: 'Material Design',
    image: '/assets/icons/skill-icons/materialDesign.svg'
  },{
    name: 'Continually learning',
    image: '/assets/icons/skill-icons/growth-icon.png'
  }]
}
