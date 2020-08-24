import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {global} from './global';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CuadernoService {
  url:string;
  constructor(private http:HttpClient) {
    this.url=global.url;
   }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'cuaderno/all',null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(cuaderno:object){
    const cuadernoArray: any[]=[];
    if(cuaderno === null){return [];}

    Object.keys(cuaderno).forEach(id=>{
      const cuadernos:any =cuaderno[id];
      cuadernoArray.push(cuadernos);
    })
    return cuadernoArray;
  }

  obtenerCuaderno(id,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'cuaderno/buscar',id,{headers:headers});

  }
  crearConfiguracion(cuaderno,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'configuracioncuaderno/crear',cuaderno, {headers:headers} );
  }
}
