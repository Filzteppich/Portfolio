import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {
  @Input() language: 'de' | 'en' = 'de'
  
   portfolioProjects = [{
    name: 'El Pollo Loco',
    image: 'el-pollo-loco.png',
    skills: 'HTML | CSS | JavaScript',
    descriptionDe: 'Ein simples Jump-’n’-Run-Spiel mit objektorientierter Grafik. Hilf der Spielfigur Pepe, Münzen und scharfe Tabascoflaschen zu finden, um gegen wütende Hühnergegner zu kämpfen.', 
    descriptionEn: 'A simple Jump-and-Run game, based on an object oriented approach. Help Character Pepe to find coins and spicy Tabasco bottles to fight against outraged chicken enemies', 
    liveTest: '',
    gitHub: 'https://github.com/Filzteppich/El-Pollo-Loco',
  },{
    name: 'Join',
    image: 'join.png',
    skills: 'HTML | CSS | JavaScript | Firebase',
    descriptionDe: 'Aufgabenmanager, inspiriert vom Kanban-System. Aufgaben per Drag & Drop erstellen und organisieren, Benutzer und Kategorien zuweisen.', 
    descriptionEn: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', 
    liveTest: '',
    gitHub: 'https://github.com/Filzteppich/Join-455',
  },]
}
