import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearLapizService {

  private url='http://localhost:8000/api/lapiz/';

  constructor(private http:HttpClient) { }

  crearLapiz(lapiz,token): Observable<any>{

    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'crear',lapiz, {headers:headers} );
    }
}
