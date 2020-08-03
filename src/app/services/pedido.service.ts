import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {global} from './global';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  url:string;

  constructor(private http:HttpClient) {
    this.url=global.url;
  }

  crearPedido(pedido,token): Observable<any>{
    let headers= new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'pedido/crear',pedido,{headers:headers});
    }

    all(){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders().set('Authorization',token);
      return this.http.post(this.url+'pedido/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
    }
    private crearArreglo(pedido:object){
      const pedidoArray: any[]=[];
      if(pedido === null){return [];}

      Object.keys(pedido).forEach(id=>{
        const movies:any =pedido[id];
        pedidoArray.push(movies);
      })
      return pedidoArray;
    }
}
