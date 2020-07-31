import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userToken:string;

  private url='http://localhost:8000/api/usuario/';
  constructor(private http:HttpClient) {
    this.leerToken();
  }

  logearUsuario(login): Observable<any>{
    return this.http.post(this.url+'login',login).pipe(
      map( (resp:string) => {
        this.guardarToken(resp);
        return resp;
      }));
    }


    private guardarToken(token:string){
      this.userToken=token;
      localStorage.setItem('token',token);
  }

  leerToken(){
    if(localStorage.getItem('token')){
    this.userToken = localStorage.getItem('token');
    }else{
      this.userToken='';
    }

    return this.userToken;
  }

  logout(){
    localStorage.removeItem('token');
  }

  estaAutenticado():boolean{
    return this.userToken.length > 2;
  }

}
