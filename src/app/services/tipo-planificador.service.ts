import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class TipoPlanificadorService {

  url:string;
  constructor(private http:HttpClient) {
    this.url= global.url;
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'tipoPlanificador/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(tipoPlanificador:object){
    const tipoPlanificadorArray: any[]=[];
    if(tipoPlanificador === null){return [];}

    Object.keys(tipoPlanificador).forEach(id=>{
      const movies:any =tipoPlanificador[id];
      tipoPlanificadorArray.push(movies);
    })
    return tipoPlanificadorArray;
  }
}
