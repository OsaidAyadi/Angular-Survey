import { Component, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { personalInfo } from '../container/container.component';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnDestroy {
  @Input() personalInfo: personalInfo[];
  @Output() resultToParent = new EventEmitter<Object>();


  firstName: string = '';
  lastName: string = '';
  email: string = '';
  country: string = '';
  age: number = 0;
  gender: string = '';
  terms: boolean = false;

  result: Object;
  constructor() { }
 
  ngOnDestroy() {
    this.resultToParent.emit(this.result);
  }



}
