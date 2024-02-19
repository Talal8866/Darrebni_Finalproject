import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwratSelectionComponent } from './components/dwrat-selection/dwrat-selection.component';
import { DwratStartComponent } from './components/dwrat-start/dwrat-start.component';



@NgModule({
  declarations: [
    DwratSelectionComponent,
    DwratStartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DwratSelectionComponent,
    DwratStartComponent
  ],
})
export class QuizDwratModule { }
