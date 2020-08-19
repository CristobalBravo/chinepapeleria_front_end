import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url='http://localhost:8000/api/usuario/';
  constructor(private http:HttpClient) { }

  crearUsuario(usuario): Observable<any>{
    return this.http.post(this.url+'registrar',usuario);
    }

  buscarUsuario(token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'buscar',null,{headers:headers});
  }

}
