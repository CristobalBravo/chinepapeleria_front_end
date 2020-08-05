import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {global} from './global';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DetallePedidoService {
 url:string;

  constructor(private http:HttpClient) {
    this.url=global.url;
  }

  crearPedido(detallePedido,token): Observable<any>{

    let headers= new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'detallePedido/crear',detallePedido,{headers:headers});
    }


    obtenerPedido(token){
      let headers= new HttpHeaders().set('Authorization',token);
      return this.http.post(this.url+'usuario/detallePedido',null,{headers:headers}).pipe(map(this.crearArreglo));

    }


    all(){
      let token = localStorage.getItem('token');
      let headers = new HttpHeaders().set('Authorization',token);
      return this.http.post(this.url+'detallePedido/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
    }


    private crearArreglo(detallePedido:object){
      const detallePedidoArray: any[]=[];
      if(detallePedido === null){return [];}

      Object.keys(detallePedido).forEach(id=>{
        const movies:any =detallePedido[id];
        detallePedidoArray.push(movies);
      })
      return detallePedidoArray;
    }
}
