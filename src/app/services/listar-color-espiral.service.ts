import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListarColorEspiralService {

  url:string;
  constructor(private http:HttpClient) {
    this.url= global.url;
  }

  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'colorEspiral/all', null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(colorEspiral:object){
    const colorEspiralArray: any[]=[];
    if(colorEspiral === null){return [];}

    Object.keys(colorEspiral).forEach(id=>{
      const movies:any =colorEspiral[id];
      colorEspiralArray.push(movies);
    })
    return colorEspiralArray;
  }
}
