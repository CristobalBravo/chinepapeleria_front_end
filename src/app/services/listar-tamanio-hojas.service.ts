import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListarTamanioHojasService {
  url:string;
  constructor(private http:HttpClient) {
    this.url= global.url;
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'tamanioHoja/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(tamanioHoja:object){
    const tamanioHojaArray: any[]=[];
    if(tamanioHoja === null){return [];}

    Object.keys(tamanioHoja).forEach(id=>{
      const movies:any =tamanioHoja[id];
      tamanioHojaArray.push(movies);
    })
    return tamanioHojaArray;
  }
}
