import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  crear(cuaderno,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'cuaderno/crear',cuaderno, {headers:headers} );
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'cuaderno/all',null,{headers:headers}).pipe(map(this.crearArreglo));
  }
  private crearArreglo(cuaderno:object){
    const cuadernoarray: any[]=[];
    if(cuaderno === null){return [];}

    Object.keys(cuaderno).forEach(id=>{
      const movies:any =cuaderno[id];
      cuadernoarray.push(movies);
    })
    return cuadernoarray;
  }

  buscarPorId(id){
    return this.http.post(this.url+'cuaderno/buscar',id);
  }


}
