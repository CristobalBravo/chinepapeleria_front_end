import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoLineaService {
  url:string;
  constructor(private http:HttpClient ) {
    this.url=global.url;
  }

  all(){
    return this.http.post(this.url+'tipoLinea/all', null).pipe(map(this.crearArreglo));
  }
  private crearArreglo(tipoLinea:object){
    const tipoLineaArray: any[]=[];
    if(tipoLinea === null){return [];}

    Object.keys(tipoLinea).forEach(id=>{
      const tipoLineas:any =tipoLinea[id];
      tipoLineaArray.push(tipoLineas);
    })
    return tipoLineaArray;
  }
}
