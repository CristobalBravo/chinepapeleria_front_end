import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallePedidoService {

  private url='http://localhost:8000/api/detallePedido/';
  constructor(private http:HttpClient) { }

  crearPedido(detallePedido,token): Observable<any>{

    let headers= new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'crear',detallePedido,{headers:headers});
    }
}
