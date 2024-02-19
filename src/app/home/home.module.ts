import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseSelectionComponent } from './components/course-selection/course-selection.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeBeforloginComponent } from './components/home-beforlogin/home-beforlogin.component';
import { MasterComponent } from './components/master/master.component';


@NgModule({
  declarations: [
    HomeBeforloginComponent,
    CourseSelectionComponent,
    MasterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    CourseSelectionComponent,
    HomeBeforloginComponent,
    MasterComponent
  ],

})
export class HomeModule { }
