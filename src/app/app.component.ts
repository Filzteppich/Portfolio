import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./main-content/landing-page/navbar/navbar.component";
import { MainContentComponent } from "./main-content/main-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myPortfolio';
  language: 'de' | 'en' = 'de';


}
