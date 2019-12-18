/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyQuestionService } from './my-question.service';

describe('Service: MyQuestion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyQuestionService]
    });
  });

  it('should ...', inject([MyQuestionService], (service: MyQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
