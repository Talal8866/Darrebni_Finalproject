import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AfterloginComponent } from './components/afterlogin/afterlogin.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AfterloginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AfterloginComponent
  ],
})
export class SharedModule { }
