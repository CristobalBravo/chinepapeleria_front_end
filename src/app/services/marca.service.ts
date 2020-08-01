import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url=global.url;
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'marca/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(marca:object){
    const marcaArray: any[]=[];
    if(marca === null){return [];}

    Object.keys(marca).forEach(id=>{
      const movies:any =marca[id];
      marcaArray.push(movies);
    })
    return marcaArray;
  }
}
