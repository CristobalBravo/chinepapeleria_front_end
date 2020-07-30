import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UsuarioModel } from '../Models/usuario.models';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url='http://localhost:8000/api/usuario';
  constructor(private http:HttpClient) { }

  crearUsuario(usuario): Observable<any>{
    let json= JSON.stringify(usuario);
    let params= 'json='+json;
    let headers= new HttpHeaders().set('Content-Type','aplication/form-data');
    return this.http.post(this.url+'/registrar',params,{headers:headers});


    }

}
