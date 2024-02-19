import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { EditModule } from './edit/edit.module';
import { HomeModule } from './home/home.module';
import { QuizModule } from './quiz/quiz.module';
import { QuizDwratModule } from './quiz-dwrat/quiz-dwrat.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule,  } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    // routingComponents
  ],
  imports: [
    BrowserModule,
    AuthModule,
    EditModule,
    HomeModule,
    QuizModule,
    QuizDwratModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
