import { Component } from '@angular/core';
import { CommonModule} from "../../../node_modules/@angular/common";


@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
   portfolioProjects = [{
    name: 'El Pollo Loco',
    image: 'el-pollo-loco.png',
    skills: 'HTML | CSS | JavaScript',
    description: 'A simple Jump-and-Run game, based on an object oriented approach. Help Character Pepe to find coins and spicy Tabasco bottles to fight against outraged chicken enemies', 
    liveTest: '',
    gitHub: '',
  },{
    name: 'Join',
    image: 'join.png',
    skills: 'HTML | CSS | JavaScript | Firebase',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', 
    liveTest: '',
    gitHub: '',
  },]
}
