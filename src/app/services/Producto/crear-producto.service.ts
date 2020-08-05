import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrearProductoService {

  private url = 'http://localhost:8000/api/producto/';

  constructor(private http:HttpClient) { }

  crearProducto(producto, token: string): Observable<any>{
    let strcontent = 'application/json';
    let header = new HttpHeaders().set('Authorization', token).set('Accept', strcontent);
    let urlws = this.url + 'crear';
    return this.http.post(urlws, producto, {headers: header});
  }
}
