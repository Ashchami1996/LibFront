import { User } from './../../../dto/User';
import { AuthService } from './../../../service/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Array<User> = [];
  selectedUser: User = new User();
  tempUser: User = null;
  manuallySelected = true;
  inputDisabled = true;
  count = 0;
  manually = false;
  st: User = null;
  loginForm: FormGroup = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  });
  get UserName () {
    return this.loginForm.get('userName');
  }
  get Password () {
    return this.loginForm.get('password');
  }
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.searchUser(this.UserName.value).subscribe(
      (result) => {
        this.selectedUser = result;
        if (this.UserName.value === this.selectedUser.username && this.Password.value ===
          this.selectedUser.password ) {
          console.log(this.selectedUser);
          console.log(this.UserName.value);
          alert(this.UserName.value);
          console.log(this.Password.value);
          alert(this.Password.value);

          this.authService.login(this.UserName.value, this.Password.value);
        }

        if (!result) {

          alert('User Not Found !');
          // this.clear(x);
          //  this.selectedCustomer = null;

        }
      }
    );
  }
}
