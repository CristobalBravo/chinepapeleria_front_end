import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {global} from './global';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PlanificadorService {
  url:string;

  constructor(private http:HttpClient) {
    this.url=global.url;
  }

  crear(planificador,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'planificador/crear',planificador, {headers:headers} );
  }

  crearConfiguracion(planificador,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'configuracionplanificador/crear',planificador, {headers:headers} );
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'planificador/all',null,{headers:headers}).pipe(map(this.crearArreglo));
  }
  private crearArreglo(planificador:object){
    const planificadorArray: any[]=[];
    if(planificador === null){return [];}

    Object.keys(planificador).forEach(id=>{
      const movies:any =planificador[id];
      planificadorArray.push(movies);
    })
    return planificadorArray;
  }

  buscarPorId(id,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'planificador/buscar',id,{headers:headers});
  }


}
