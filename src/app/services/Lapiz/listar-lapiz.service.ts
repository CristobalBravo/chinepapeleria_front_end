import { Injectable } from '@angular/core';
import { global } from '../global';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListarLapizService {
  url:string;

  constructor(private http:HttpClient) {
    this.url= global.url;
  }


  obtenerlapiz(id,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'lapiz/buscar',id,{headers:headers});

  }

  all(){

    return this.http.post(this.url+'lapiz/all', null ).pipe(map(this.crearArreglo));
  }
  private crearArreglo(lapiz:object){
    const LapizArray: any[]=[];
    if(lapiz === null){return [];}

    Object.keys(lapiz).forEach(id=>{
      const movies:any =lapiz[id];
      LapizArray.push(movies);
    })
    return LapizArray;
  }

  eliminar(lapiz,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'lapiz/eliminar',lapiz,{headers:headers});

  }

}
