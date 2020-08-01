import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrearProductoService {

  private url='http://localhost:8000/api/producto/';

  constructor(private http:HttpClient) { }

  crearProducto(producto,token): Observable<any>{

    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'crear',producto, {headers:headers} );
    }
}
