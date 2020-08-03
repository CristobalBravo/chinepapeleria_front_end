import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url='http://localhost:8000/api/pedido/';
  constructor(private http:HttpClient) { }

  crearPedido(pedido,token): Observable<any>{
    let headers= new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'crear',pedido,{headers:headers});
    }
}
