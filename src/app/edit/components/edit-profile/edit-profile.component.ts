import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  constructor(private router: Router) { }

  editForm!: FormGroup;

  ngOnInit() {
    this.editForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required])
    })
  }

  goBack() {
    this.router.navigate(['/.']);
  }

}
