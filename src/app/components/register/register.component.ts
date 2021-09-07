import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  user = <User>{};

  registeredSuccessfully: boolean = false;

  registrationFailed: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  submitRegForm() {
    if (this.registerForm.value.email != '') {
      this.user.email = this.registerForm.value.email;
    }

    if (this.registerForm.value.password != '') {
      this.user.password = this.registerForm.value.password;
    }

    this.userService.saveNewUserToDB(this.user).subscribe(
      (response) => {
        this.registeredSuccessfully = true;
        setTimeout(()=> {
          this.registeredSuccessfully = false; // Removing the notification from the screen;
        }, 2000)
      },
      (error) => {
        this.registrationFailed = true;
        setTimeout(()=> {
          this.registrationFailed = false; // Removing the notification from the screen;
        }, 2000)
        console.log("User was not registered. Error code = " + error.status);
      }
    )
    // Clearing the form window;
    this.registerForm.reset();
  }
}
