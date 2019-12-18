import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyQuestionService {
private url: string = '/assets/data/question.json';
constructor(private http: HttpClient) { }

printQ (): Observable<Object> {
  return this.http.get<Object>(this.url);
}

}
