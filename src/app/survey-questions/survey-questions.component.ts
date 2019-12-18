import { Component, OnDestroy, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent implements OnDestroy {
  @Input() progress: number;
  @Input() data: number;
  @Output() userAnswerTP = new EventEmitter<Object>();

  userAnswer: string[]= Array(this.progress);
  constructor() { }

  ngOnDestroy() {
    // this.userAnswerTP.emit();
    console.log(this.userAnswer);
  }

  getCustomCss(type) {
    return type === 'radio' ? 'custom-radio' : 'custom-checkbox';
  }

}
