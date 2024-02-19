import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { QuizStartComponent } from './quiz/components/quiz-start/quiz-start.component';
import { QuizResultComponent } from './quiz/components/quiz-result/quiz-result.component';
import { QuizQuestionsComponent } from './quiz/components/quiz-questions/quiz-questions.component';
import { QuizCorrectionComponent } from './quiz/components/quiz-correction/quiz-correction.component';
import { CourseSelectionComponent } from './home/components/course-selection/course-selection.component';
import { EditProfileComponent } from './edit/components/edit-profile/edit-profile.component';
import { HomeBeforloginComponent } from './home/components/home-beforlogin/home-beforlogin.component';
import { AfterloginComponent } from './shared/components/afterlogin/afterlogin.component';

const routes: Routes = [
  {path:"" , component:HomeBeforloginComponent},
  {path:"home-beforlogin" , component:HomeBeforloginComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"quiz-start", component:QuizStartComponent},
  {path:"quiz-result", component:QuizResultComponent},
  {path:"quiz-questions", component:QuizQuestionsComponent},
  {path:"quiz-correction", component:QuizCorrectionComponent},
  {path:"afterlogin", component:AfterloginComponent},
  {path:"course-selection", component:CourseSelectionComponent},
  {path:"edit-profile", component:EditProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

// export const routingComponents = [];
