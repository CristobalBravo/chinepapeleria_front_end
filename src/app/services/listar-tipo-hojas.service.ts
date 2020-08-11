import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListarTipoHojasService {
  url:string;
  constructor(private http:HttpClient) {
    this.url= global.url;
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'tipoHoja/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(tipoHoja:object){
    const tipoHojaArray: any[]=[];
    if(tipoHoja === null){return [];}

    Object.keys(tipoHoja).forEach(id=>{
      const movies:any =tipoHoja[id];
      tipoHojaArray.push(movies);
    })
    return tipoHojaArray;
  }
}
