import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  UserForm!: FormGroup;

  constructor(private fb:FormBuilder , private service:AuthService){}

  ngOnInit() {
      //  this.creatForm();
    this.UserForm= new FormGroup({
      username :new FormControl(null, [Validators.required]),
      phonenumber: new FormControl(null, [Validators.required]),
      den: new FormControl(null),
      pha: new FormControl(null),
      arc: new FormControl(null),
      ite: new FormControl(null),
      nur: new FormControl(null),
      med: new FormControl(null)
    })
  }

  
  // creatForm() {
  //   this.UserForm = this.fb.group({
  //     username:['',[Validators.required]],
  //     phoneNumber:['',[Validators.required,Validators.email]]
  //   })
  // }s

  OnSubmit(){
    // const model ={
    //   username:this.UserForm.value.username,
    //   phonenumber:this.UserForm.value.phonenumber
    // }
    // this.service.createUser(model).subscribe(res =>{
    //   alert("Success")
    // })
  
  console.log(this.UserForm);

  }

 
}
