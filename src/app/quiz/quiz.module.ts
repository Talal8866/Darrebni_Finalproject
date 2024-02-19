import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { QuizCorrectionComponent } from './components/quiz-correction/quiz-correction.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    QuizStartComponent,
    QuizQuestionsComponent,
    QuizResultComponent,
    QuizCorrectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    QuizStartComponent,
    QuizQuestionsComponent,
    QuizResultComponent,
    QuizCorrectionComponent
  ],
})
export class QuizModule { }
