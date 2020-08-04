import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/login.models';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userToken: string;

  private url = 'http://localhost:8000/api/usuario/';

  constructor(private http: HttpClient, private router: Router) {
    this.leerToken();
  }

  logearUsuario(login: LoginModel): Observable<any> {
    return this.http.post(this.url + 'login', login).pipe(
      map((resp: string) => {
        resp = JSON.stringify(resp);
        let data = JSON.parse(resp);
        if (data.token !== undefined){
          let tkn: string = data.token;
          this.guardarToken(tkn, login.email);
        }
        return data;
      }));
  }


  private guardarToken(token: string, email: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  getUser() {
    if (this.estaAutenticado()) {
      var user = new LoginModel();
      user.email = localStorage.getItem('email');
      user.token = localStorage.getItem('token');
      return user;
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  estaAutenticado(): boolean {
    return localStorage.getItem('token') != null && localStorage.getItem('token') != undefined && localStorage.getItem('token').length > 2;
  }

}
