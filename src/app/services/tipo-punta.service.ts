import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root',
})
export class TipoPuntaService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = global.url;
  }

  all(): Observable<any> {
    let urlfinal = this.url + 'tipoPunta/all';
    return this.http.post(urlfinal, {}, {});
  }
}
