import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FlashCardService {
  url:string;

  constructor(private http: HttpClient) {
    this.url=global.url;
  }

  crear(flashcard,token){
    let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'flashCard/crear',flashcard, {headers:headers} );
  }

  all(){
    //let token = localStorage.getItem('token');
    //let headers = new HttpHeaders().set('Authorization',token);
    return this.http.post(this.url+'flashCard/all',null).pipe(map(this.crearArreglo));
  }
  private crearArreglo(flashCard:object){
    const flashCardArray: any[]=[];
    if(flashCard === null){return [];}

    Object.keys(flashCard).forEach(id=>{
      const movies:any =flashCard[id];
      flashCardArray.push(movies);
    })
    return flashCardArray;
  }

  buscarPorId(id){
    return this.http.post(this.url+'flashCard/buscar',id);
  }
}
