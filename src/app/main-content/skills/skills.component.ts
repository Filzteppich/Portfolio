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
    image: '/assets/icons/skill-icons/html.svg'
  },{
    name: 'CSS',
    image: '/assets/icons/skill-icons/css.svg'
  },{
    name: 'JavaScript',
    image: '/assets/icons/skill-icons/javaScript.svg'
  },{
    name: 'TypeScript',
    image: '/assets/icons/skill-icons/typescript.svg'
  },{
    name: 'Angular',
    image: '/assets/icons/skill-icons/angular.svg'
  },{
    name: 'Firebase',
    image: '/assets/icons/skill-icons/firebase.svg'
  },{
    name: 'Git',
    image: '/assets/icons/skill-icons/git.svg'
  },{
    name: 'Rest API',
    image: '/assets/icons/skill-icons/api.svg'
  },{
    name: 'Material Design',
    image: '/assets/icons/skill-icons/materialDesign.svg'
  },{
    name: 'Continually learning',
    image: '/assets/icons/skill-icons/continually-learning.svg'
  }]
}
