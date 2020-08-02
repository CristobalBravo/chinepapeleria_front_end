import { Injectable } from '@angular/core';
import { global } from './global';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarPuntasService {
  url:string;
  constructor(private http:HttpClient) {
    this.url= global.url;
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'tipoPunta/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(tipoPunta:object){
    const tipoPuntaArray: any[]=[];
    if(tipoPunta === null){return [];}

    Object.keys(tipoPunta).forEach(id=>{
      const movies:any =tipoPunta[id];
      tipoPuntaArray.push(movies);
    })
    return tipoPuntaArray;
  }
}
