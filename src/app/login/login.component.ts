import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn:boolean = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private service: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  authenticate(username:string, password:string) {
    let submittedUser = new UserInfo(username, password);
    console.log("Login attempted using: " + username);
    this.service.authenticate(submittedUser).subscribe(
      result => {
        console.log("log in result: " + result);
        this.isLoggedIn = result;
        sessionStorage.setItem("isLoggedIn", this.isLoggedIn.toString());
      }
    );
  }

  onSubmit() {
    this.authenticate(this.loginForm.value.username, this.loginForm.value.password);
  }
}
