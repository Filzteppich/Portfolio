import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  feedbackIndex : number = 0;

    feedbacks = [
    {
      name: 'Steven Rudko',
      comment: 'Die Zusammenarbeit mit Khang in unserem Gruppenprojekt war ein voller Erfolg. Die Coding-Qualität seiner Beiträge war herausragend und die Zusammenarbeit stets angenehm und produktiv. Was Khang aber besonders macht, ist seine Persönlichkeit: Ich habe in ihm nicht nur einen exzellenten Partner, sondern auch einen Freund gefunden. Khang ist sowohl technisch als auch menschlich eine große Bereicherung für jedes Team.',
      relation: 'Teampartner'
    },{
      name: 'Nawied Syed',
      comment: 'Mit Khang habe ich im Projekt gut zusammenarbeiten können. Er hat seine Aufgaben termingerecht erledigt und sich in technische Abstimmungen sachlich eingebracht.',
      relation: 'Teampartner'
    },{
      name: 'Michele Korfmacher',
      comment: '',
      relation: 'Teampartner'
    }
  ]

  nextIndex(){
    this.feedbackIndex++
    if (this.feedbackIndex >= this.feedbacks.length) {
      this.feedbackIndex = 0;
    }else{
      return;
    }
  }

  previousIndex(){
    this.feedbackIndex--
    if (this.feedbackIndex < 0) {
      this.feedbackIndex = this.feedbacks.length - 1
    }else{
      return
    }
  }

  getSpecificIndex(index:number){
    this.feedbackIndex = index
  }
}
