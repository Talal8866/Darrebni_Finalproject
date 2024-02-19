import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //ReactiveForm :
  loginForm!: FormGroup;

  constructor(private route: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required])
    })
  }

  OnSubmit() {
    if (this.loginForm.valid) {
      const name = this.loginForm.get('name')?.value;
      const code = this.loginForm.get('code')?.value;

      //Send the entered values to the server
      this.httpClient.post('http://192.168.31.82:8000/api/login', { name, code }).subscribe(response => {
        //التحقق من صحة الاستجابة واتخاذ الاجراءات المناسبة 
        // const name = response.user.name;
        // const value = response.user.code.value;

      });

      // بعد التحقق من صحة الحساب يمكنك توجيه المستخدم الى صفحة المنزل او اي صفحة اخرى 

      this.route.navigate(['/home']);
    }
  }

  toRegister() {
    this.route.navigate(['/register']);
  }

}
