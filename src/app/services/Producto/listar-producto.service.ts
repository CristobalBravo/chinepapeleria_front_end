import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListarProductoService {
  url:string;
  constructor(private http:HttpClient) {
    this.url= global.url;
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'producto/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(producto:object){
    const productoArray: any[]=[];
    if(producto === null){return [];}

    Object.keys(producto).forEach(id=>{
      const movies:any =producto[id];
      productoArray.push(movies);
    })
    return productoArray;
  }

}
