import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class DisenoCuadernoService {
  url:string;
  constructor(private http: HttpClient) {
    this.url=global.url;
  }

  crear(configuracionCuaderno,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'configuracioncuaderno/crear',configuracionCuaderno, {headers:headers} );
  }
}
