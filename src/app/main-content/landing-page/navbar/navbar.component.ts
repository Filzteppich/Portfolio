import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnChanges {
  @Input() language: 'de' | 'en' = 'de';
  @Output() languageChange = new EventEmitter<'de' | 'en'>();

  englishLanguage: boolean = false;
  germanLanguage: boolean = true;

  ngOnChanges(): void {
    const isGerman = this.language === 'de';
    this.germanLanguage = isGerman;
    this.englishLanguage = !isGerman;
  }

  setGermanLanguage(){
    if (this.language !== 'de') {
      this.language = 'de';
      this.germanLanguage = true;
      this.englishLanguage = false;
      this.languageChange.emit('de');
    }
  }

  setEnglishLanguage(){
    if (this.language !== 'en') {
      this.language = 'en';
      this.germanLanguage = false;
      this.englishLanguage = true;
      this.languageChange.emit('en');
    }
  }
}
