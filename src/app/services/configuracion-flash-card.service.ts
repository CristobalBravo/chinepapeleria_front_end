import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionFlashCardService {
  url:string;
  constructor(private http: HttpClient) {
    this.url=global.url;
  }

  crear(configuracionFlashCard,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'configuracionFlashCard/crear',configuracionFlashCard, {headers:headers} );
  }
}
