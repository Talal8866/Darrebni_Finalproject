import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditProfileComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports :[
    EditProfileComponent,
    ContactComponent
  ],
})
export class EditModule { }
