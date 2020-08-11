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

  logearUsuario(login: LoginModel): Observable<any> {
    return this.http.post(this.url + 'usuario/login', login).pipe(
      map((resp: string) => {
        resp = JSON.stringify(resp);
        let data = JSON.parse(resp);
        if (data.token !== undefined){
          let tkn: string = data.token;
          let rol: string = data.rol;
          this.guardarToken(tkn, login.email, rol);
        }
        return data;
      }));
  }


  private guardarToken(token: string, email: string, rol: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('rol', rol);
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
      user.rol = localStorage.getItem('rol');
      return user;
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigateByUrl('/login');
  }

  estaAutenticado(): boolean {
    return localStorage.getItem('token') != null && localStorage.getItem('token') != undefined && localStorage.getItem('token').length > 2;
  }

  cliente(): boolean {
    return (
      this.estaAutenticado() &&
      localStorage.getItem('rol') != null &&
      localStorage.getItem('rol') !== undefined &&
      localStorage.getItem('rol') !== 'ROLE_ADMIN'
    );
  }

  admin(): boolean {
    return (
      this.estaAutenticado() &&
      localStorage.getItem('rol') != null &&
      localStorage.getItem('rol') !== undefined &&
      localStorage.getItem('rol') === 'ROLE_ADMIN'
    );
  }

}
