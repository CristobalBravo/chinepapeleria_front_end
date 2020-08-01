import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url:string;
  constructor(private http: HttpClient) {
    this.url=global.url;
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'categoria/all',null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(categoria:object){
    const categoriaArray: any[]=[];
    if(categoria === null){return [];}

    Object.keys(categoria).forEach(id=>{
      const movies:any =categoria[id];
      categoriaArray.push(movies);
    })
    return categoriaArray;
  }
}
