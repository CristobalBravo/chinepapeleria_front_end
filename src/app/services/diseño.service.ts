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
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'diseno/crear',diseno, {headers:headers} );
  }
}
