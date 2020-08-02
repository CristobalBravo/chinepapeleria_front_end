import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class CrearLapizService {

 url:string;

  constructor(private http:HttpClient) {
    this.url=global.url;
  }

  crearLapiz(lapiz,token): Observable<any>{

    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'lapiz/crear',lapiz, {headers:headers} );
    }
}
