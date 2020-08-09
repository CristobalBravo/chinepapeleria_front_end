import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {global} from './global';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DiseñoService {
  url:string;
  constructor(private http:HttpClient) {
    this.url=global.url;
  }
  crear(diseno,token){
    let strcontent = 'application/json';
    let header = new HttpHeaders().set('Authorization',token).set('Accept', strcontent);
    return this.http.post(this.url+'diseno/crear',diseno, {headers:header} );
  }
}
