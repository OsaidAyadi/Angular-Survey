import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() personalInfo;
  personalData: Object;
  constructor() { }

  ngOnInit() {
    this.personalData = this.personalInfo[0];
    console.log(this.personalData)
  }

}
