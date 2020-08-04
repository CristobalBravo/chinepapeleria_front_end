import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/login.models';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { global } from './global';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userToken: string;
  isAdmin:boolean=false;

  url:string;


  constructor(private http: HttpClient, private router: Router ) {
    this.leerToken();
    this.url= global.url;
  }

  logearUsuario(login): Observable<any> {
    return this.http.post(this.url + 'usuario/login', login).pipe(
      map((resp: string) => {
        this.guardarToken(resp);
        return resp;
      }));
  }


  private guardarToken(token: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
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
    return localStorage.getItem('token') != null && localStorage.getItem('token').length > 2;
  }



}
