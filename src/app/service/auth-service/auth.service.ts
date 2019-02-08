import { User } from './../../dto/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


export const MAIN_URL = 'http://localhost:8087';
const URL = '/User';
@Injectable()
export class AuthService {

  // private isLogin: boolean = false;

  get isLoggedIn() {

    if (sessionStorage.getItem('token')) {
      return true;
    }

    return false;

  }

  constructor(private router: Router, private http: HttpClient) { }

  searchUser(userName: String): Observable<User> {
    return this.http.get<User>(MAIN_URL + URL + '/find' + '/' + userName);
  }

  login(userName: string, password: string) {
    sessionStorage.setItem('token', 'token');
    this.router.navigate(['/home']);
  }


  logout() {

    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
