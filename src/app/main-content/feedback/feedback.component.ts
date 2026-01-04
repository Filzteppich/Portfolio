import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
@Input() language: 'de' | 'en' = 'de'
  feedbackIndex : number = 0;
  animateLeft : boolean = false;
  animateRight : boolean = false;
  isTransitioning: boolean = false;
  noTransition: boolean = false;


    feedbacks = [
    {
      name: 'Steven Rudko',
      commentDe: 'Die Zusammenarbeit mit Khang in unserem Gruppenprojekt war ein voller Erfolg. Die Coding-Qualität seiner Beiträge war herausragend und die Zusammenarbeit stets angenehm und produktiv. Was Khang aber besonders macht, ist seine Persönlichkeit: Ich habe in ihm nicht nur einen exzellenten Partner, sondern auch einen Freund gefunden. Khang ist sowohl technisch als auch menschlich eine große Bereicherung für jedes Team.',
      commentEn: 'Working with Khang on our group project was a complete success. The coding quality of his contributions was outstanding, and the collaboration was always pleasant and productive. But what makes Khang truly special is his personality: I found in him not only an excellent partner but also a friend. Khang is a great asset to any team, both technically and personally.',
      relation: 'Teampartner'
    },{
      name: 'Nawied Syed',
      commentDe: 'Mit Khang habe ich im Projekt gut zusammenarbeiten können. Er hat seine Aufgaben termingerecht erledigt und sich in technische Abstimmungen sachlich eingebracht.',
      commentEn: 'I was able to work well with Khang on the project. He completed his tasks on time and contributed constructively to technical discussions..',
      relation: 'Teampartner'
    },{
      name: 'Michele Korfmacher',
      commentDe: 'Khang zeigte während unserer gemeinsamen Projektarbeit eine hohe Lernbereitschaft und großes Interesse an neuen Technologien. Mit seinem schnellen Verständnis für technische Zusammenhänge und seiner Fähigkeit, pragmatische Lösungen zu finden, trug er maßgeblich zum Fortschritt unseres Projekts bei. Besonders positiv blieb mir seine ausgeprägte Teamfähigkeit in Erinnerung.',
      commentEn: 'During our joint project work, Khang demonstrated a strong willingness to learn and a keen interest in new technologies. His quick grasp of technical concepts and his ability to find pragmatic solutions made a significant contribution to the projects progress. I particularly remember his excellent teamwork skills.',
      relation: 'Teampartner'
    }
  ]

  nextIndex(){
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    this.animateLeft = true;

    setTimeout(() => {
      this.feedbackIndex = (this.feedbackIndex + 1) % this.feedbacks.length;
      this.animateLeft = false;
      this.noTransition = true;     
      this.animateRight = true;     

      setTimeout(() => {
        this.noTransition = false;  
        setTimeout(() => {
          this.animateRight = false;  
          setTimeout(() => {
            this.isTransitioning = false;
          }, 300);
        }, 20);
      }, 20);
    }, 300);
  }

  previousIndex(){
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    this.animateRight = true;

    setTimeout(() => {
      this.feedbackIndex = (this.feedbackIndex - 1 + this.feedbacks.length) % this.feedbacks.length;

      this.animateRight = false;
      this.noTransition = true;     
      this.animateLeft = true;      
      setTimeout(() => {
        this.noTransition = false;  
        setTimeout(() => {
          this.animateLeft = false; 
          setTimeout(() => {
            this.isTransitioning = false;
          }, 300);
        }, 20);
      }, 20);
    }, 300);
  }

  getSpecificIndex(index:number){
    if (index === this.feedbackIndex || this.isTransitioning) return;

    this.isTransitioning = true;

    if (index > this.feedbackIndex) {
      this.animateLeft = true;

      setTimeout(() => {
        this.feedbackIndex = index;

        this.animateLeft = false;
        this.noTransition = true;
        this.animateRight = true;

        setTimeout(() => {
          this.noTransition = false;
          setTimeout(() => {
            this.animateRight = false;
            setTimeout(() => {
              this.isTransitioning = false;
            }, 300);
          }, 20);
        }, 20);
      }, 300);
    } else {
      this.animateRight = true;

      setTimeout(() => {
        this.feedbackIndex = index;

        this.animateRight = false;
        this.noTransition = true;
        this.animateLeft = true;

        setTimeout(() => {
          this.noTransition = false;
          setTimeout(() => {
            this.animateLeft = false;
            setTimeout(() => {
              this.isTransitioning = false;
            }, 300);
          }, 20);
        }, 20);
      }, 300);
    }
  }
}
