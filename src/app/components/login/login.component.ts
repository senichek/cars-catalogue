import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  user = {
    email: "",
    password: ""
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  getCredentials() {
    if (this.loginForm.value.email != '') {
      this.user.email = this.loginForm.value.email;
    }

    if (this.loginForm.value.password != '') {
      this.user.password = this.loginForm.value.password;
    }

    //this.carListComp.saveNewCarToDB(this.car);
    // Clearing the form window;
    this.loginForm.reset();

  }

}
