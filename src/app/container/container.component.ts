import { Component, OnInit } from '@angular/core';
import { MyQuestionService } from '../my-question.service'


export interface personalInfo {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  age: number;
  gender: string;
  terms?: boolean;
}

export interface questionResult {
  question: String;
  answer: String[];
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  progress: number=0;
  quetionsSize: number=0;
  data: any;
  personalInfo: personalInfo[] = [];
  questionResult: questionResult[];

  constructor(private question: MyQuestionService) { }

  ngOnInit() {
    this.question.printQ()
      .subscribe(data => this.data = data);
    setTimeout(() => {
      this.quetionsSize = this.data.length;
    }, 2000);

    this.personalInfo = [{
      firstName:'',
      lastName:'',
      email:'',
      country:'',
      age: null,
      gender:'male',
      terms:false,
    }];

    this.questionResult = [{
      question:'',
      answer:[]
    }]
  }

  arrow(target): void {
    target === 'forward' ? this.progress++ : this.progress--;
  }

  compleatedStyle() {
    if (this.progress <= this.quetionsSize){
      return `${this.progress * (100 / this.quetionsSize)}%`;
    }else {
      return `${(this.progress-1) * (100 / this.quetionsSize)}%`;;
    }
  }

  getResult(res) {
    this.personalInfo.push(res);
  }
}
