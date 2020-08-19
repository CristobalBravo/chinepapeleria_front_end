import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  url:string;
  constructor(private http:HttpClient) {
    this.url=global.url;
  }


  all(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'agenda/all',null,{headers:headers} ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(agenda:object){
    const agendaArray: any[]=[];
    if(agenda === null){return [];}

    Object.keys(agenda).forEach(id=>{
      const agendas:any =agenda[id];
      agendaArray.push(agendas);
    })
    return agendaArray;
  }

  obtenerAgenda(id,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'agenda/buscar',id,{headers:headers});
  }

  crearConfiguracion(agenda,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'configuracionAgenda/crear',agenda, {headers:headers} );
  }
}
