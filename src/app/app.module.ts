import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SurveyQuestionsComponent } from './survey-questions/survey-questions.component';
import { ResultComponent } from './result/result.component';

@NgModule({
   declarations: [
      AppComponent,
      ContainerComponent,
      PersonalInfoComponent,
      SurveyQuestionsComponent,
      ResultComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
