import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListarTipoTapaService {
  url:string;
  constructor(private http:HttpClient) {
    this.url= global.url;
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'tipoTapa/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(tipoTapa:object){
    const tipoTapaArray: any[]=[];
    if(tipoTapa === null){return [];}

    Object.keys(tipoTapa).forEach(id=>{
      const movies:any =tipoTapa[id];
      tipoTapaArray.push(movies);
    })
    return tipoTapaArray;
  }
}
